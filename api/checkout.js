// Gera um link de pagamento do Mercado Pago (Pix, cartão e boleto)
// a partir do carrinho enviado pelo site.
//
// Funciona como função serverless na Vercel: basta publicar o projeto
// lá e configurar a variável de ambiente MP_ACCESS_TOKEN com o
// Access Token de produção (Mercado Pago → Suas integrações →
// Credenciais de produção). O token fica só no servidor — nunca
// aparece no site.

const { CONFIG, PRODUTOS } = require("../produtos.js");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ erro: "use POST" });
    return;
  }
  const token = process.env.MP_ACCESS_TOKEN;
  if (!token) {
    res.status(500).json({ erro: "MP_ACCESS_TOKEN não configurado na hospedagem" });
    return;
  }

  try {
    const itens = (req.body && req.body.itens) || [];
    // O preço vem sempre do catálogo do servidor, nunca do navegador.
    const items = itens.map(({ i, qty }) => {
      const p = PRODUTOS[i];
      const q = Math.floor(Number(qty));
      if (!p || !(q > 0) || q > 99) throw new Error("carrinho inválido");
      return { title: p.nome, quantity: q, currency_id: "BRL", unit_price: p.preco };
    });
    if (!items.length) throw new Error("carrinho vazio");

    const subtotal = items.reduce((s, it) => s + it.unit_price * it.quantity, 0);
    if (CONFIG.frete && subtotal < CONFIG.frete.gratisAcima && CONFIG.frete.fixo > 0) {
      items.push({ title: "Frete", quantity: 1, currency_id: "BRL", unit_price: CONFIG.frete.fixo });
    }

    const origem = `https://${req.headers.host}`;
    const resposta = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        items,
        back_urls: {
          success: `${origem}/?pagamento=aprovado`,
          pending: `${origem}/?pagamento=pendente`,
          failure: `${origem}/?pagamento=erro`,
        },
        auto_return: "approved",
        statement_descriptor: CONFIG.nomeDaLoja,
      }),
    });
    const dados = await resposta.json();
    if (!resposta.ok || !dados.init_point) {
      throw new Error(dados.message || "o Mercado Pago recusou a cobrança");
    }
    res.status(200).json({ url: dados.init_point });
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
};
