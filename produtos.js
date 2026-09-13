// ============================================================
//  CONFIGURAÇÃO DA LOJA — edite só este arquivo!
// ============================================================
//  1. Troque o nome da loja e o número do WhatsApp abaixo.
//     O WhatsApp deve estar no formato: 55 + DDD + número
//     (só números, sem espaços). Ex.: "5511987654321"
//  2. Quando criar suas lojas no Mercado Livre / Shopee /
//     Instagram, cole os links abaixo (ou deixe "" para
//     esconder o botão).
//  3. O banner de promoção da página inicial também é
//     configurado aqui.
// ============================================================

const CONFIG = {
  nomeDaLoja: "Caramelo Pet",
  // Frase que aparece abaixo do título (deixe "" para usar a padrão)
  slogan: "Escolha os produtos, monte o carrinho e finalize o pedido direto no nosso WhatsApp. Simples assim.",
  whatsapp: "5500000000000", // <<< TROQUE PELO SEU NÚMERO
  instagram: "",             // ex.: "https://instagram.com/caramelopet"
  mercadoLivre: "",          // ex.: "https://loja.mercadolivre.com.br/caramelo-pet"
  shopee: "",                // ex.: "https://shopee.com.br/caramelopet"

  // Frete cobrado no pagamento online (o WhatsApp permite combinar caso a caso)
  frete: {
    fixo: 19.9,        // valor do frete
    gratisAcima: 149.9 // pedidos a partir deste valor têm frete grátis
  },

  // Banners da página inicial (o site passa um por vez, com bolinhas)
  //   kicker  → letreiro pequeno em cima
  //   frase   → frase grande do banner
  //   destaque→ parte da frase que ganha cor de destaque
  //   especie → opcional: o botão leva pra essa espécie
  //             (sem especie, o botão leva pras Ofertas)
  banners: [
    {
      kicker: "Semana do Pet",
      frase: "Tudo pro seu melhor amigo",
      destaque: "até 30% OFF",
      texto: "Higiene, brinquedos e conforto com desconto de lançamento.",
      botao: "Ver ofertas",
      emoji: "🐶",
    },
    {
      kicker: "Entrega",
      frase: "Frete grátis",
      destaque: "acima de R$ 149",
      texto: "Complete o carrinho e a entrega é por nossa conta.",
      botao: "Aproveitar",
      emoji: "📦",
    },
    {
      kicker: "Novidade",
      frase: "Chegou a linha felina",
      destaque: "miau!",
      texto: "Areia, fonte de água, arranhador e muito mimo pro seu gato.",
      botao: "Ver produtos de gato",
      emoji: "🐱",
      especie: "Gato",
    },
  ],
};

// ============================================================
//  PRODUTOS
// ============================================================
//  Para cada produto:
//    nome        → nome que aparece no site
//    preco       → preço em reais (use ponto, ex.: 29.90)
//    precoAntigo → opcional: preço "de" riscado. Se preencher,
//                  o produto ganha selo de desconto e entra na
//                  seção Ofertas
//    especie     → "Cachorro", "Gato" ou "Outros" (vira o menu)
//    categoria   → subcategoria dentro da espécie (vira o submenu)
//    descricao   → uma frase curta de venda
//    emoji       → aparece enquanto você não tem foto
//    foto        → opcional: caminho de uma foto sua,
//                  ex.: foto: "fotos/coleira.jpg"
//    destaque    → true para aparecer no carrossel "Mais vendidos"
//
//  Estes produtos são EXEMPLOS típicos da 25 de Março / Brás.
//  Apague e coloque os seus!
// ============================================================

const PRODUTOS = [
  // ---------- CACHORRO ----------
  {
    nome: "Tapete higiênico — 30 unidades",
    preco: 49.9,
    precoAntigo: 64.9,
    especie: "Cachorro",
    categoria: "Higiene",
    descricao: "Super absorvente, com atrativo canino. O campeão de vendas.",
    emoji: "🧻",
    destaque: true,
  },
  {
    nome: "Coleira ajustável com fivela",
    preco: 19.9,
    especie: "Cachorro",
    categoria: "Passeio",
    descricao: "Nylon reforçado, tamanhos P ao G, várias cores.",
    emoji: "🦮",
  },
  {
    nome: "Guia retrátil 5 metros",
    preco: 39.9,
    especie: "Cachorro",
    categoria: "Passeio",
    descricao: "Trava de segurança e cabo confortável, até 15 kg.",
    emoji: "🐕",
    destaque: true,
  },
  {
    nome: "Peitoral acolchoado",
    preco: 34.9,
    precoAntigo: 44.9,
    especie: "Cachorro",
    categoria: "Passeio",
    descricao: "Não força o pescoço — ideal pra cães que puxam.",
    emoji: "🎽",
  },
  {
    nome: "Mordedor de borracha maciça",
    preco: 14.9,
    especie: "Cachorro",
    categoria: "Brinquedos",
    descricao: "Resistente até pra destruidores profissionais.",
    emoji: "🦴",
  },
  {
    nome: "Bolinha com apito",
    preco: 9.9,
    especie: "Cachorro",
    categoria: "Brinquedos",
    descricao: "O clássico que nenhum cachorro resiste.",
    emoji: "🎾",
    destaque: true,
  },
  {
    nome: "Corda dental trançada",
    preco: 12.9,
    especie: "Cachorro",
    categoria: "Brinquedos",
    descricao: "Diverte e ainda ajuda a limpar os dentes.",
    emoji: "🪢",
  },
  {
    nome: "Comedouro duplo inox",
    preco: 29.9,
    especie: "Cachorro",
    categoria: "Alimentação",
    descricao: "Base antiderrapante, fácil de lavar.",
    emoji: "🥣",
  },
  {
    nome: "Bifinho de carne 500 g",
    preco: 24.9,
    especie: "Cachorro",
    categoria: "Alimentação",
    descricao: "O petisco pra hora do agrado (ou do adestramento).",
    emoji: "🍖",
    destaque: true,
  },
  {
    nome: "Caminha redonda de pelúcia",
    preco: 59.9,
    precoAntigo: 79.9,
    especie: "Cachorro",
    categoria: "Conforto",
    descricao: "Macia e quentinha, tamanhos P, M e G.",
    emoji: "🛏️",
    destaque: true,
  },
  {
    nome: "Moletom pet com capuz",
    preco: 44.9,
    especie: "Cachorro",
    categoria: "Conforto",
    descricao: "Estiloso e quentinho pros dias frios.",
    emoji: "🧥",
  },
  {
    nome: "Shampoo neutro 500 ml",
    preco: 21.9,
    especie: "Cachorro",
    categoria: "Higiene",
    descricao: "Pelos macios e cheirosos, pH balanceado.",
    emoji: "🧴",
  },
  {
    nome: "Escova dental de dedo (silicone)",
    preco: 11.9,
    especie: "Cachorro",
    categoria: "Higiene",
    descricao: "Encaixa no dedo e facilita a escovação diária.",
    emoji: "🪥",
  },

  // ---------- GATO ----------
  {
    nome: "Areia higiênica 4 kg",
    preco: 19.9,
    precoAntigo: 24.9,
    especie: "Gato",
    categoria: "Higiene",
    descricao: "Alta absorção e controle de odor. A mais vendida do Brasil.",
    emoji: "🐱",
    destaque: true,
  },
  {
    nome: "Fonte de água 2 L",
    preco: 89.9,
    precoAntigo: 119.9,
    especie: "Gato",
    categoria: "Alimentação",
    descricao: "Água corrente filtrada — gatos bebem mais e ficam mais saudáveis.",
    emoji: "⛲",
    destaque: true,
  },
  {
    nome: "Arranhador com bolinha",
    preco: 49.9,
    especie: "Gato",
    categoria: "Brinquedos",
    descricao: "Salva o sofá e diverte o gato. Base estável.",
    emoji: "🐈",
  },
  {
    nome: "Varinha com penas e catnip",
    preco: 14.9,
    especie: "Gato",
    categoria: "Brinquedos",
    descricao: "Irresistível: penas, guizo e erva-de-gato.",
    emoji: "🪶",
  },
  {
    nome: "Cama toca aconchego",
    preco: 64.9,
    especie: "Gato",
    categoria: "Conforto",
    descricao: "Fechadinha do jeito que os gatos amam.",
    emoji: "🏠",
  },

  // ---------- OUTROS ----------
  {
    nome: "Removedor de pelos rolo adesivo",
    preco: 12.9,
    especie: "Outros",
    categoria: "Casa",
    descricao: "Roupa e sofá sem pelos em segundos. Refil fácil.",
    emoji: "🧹",
  },
  {
    nome: "Máquina de tosa profissional",
    preco: 119.9,
    precoAntigo: 149.9,
    especie: "Outros",
    categoria: "Higiene",
    descricao: "Silenciosa, sem fio, com 4 pentes de altura.",
    emoji: "✂️",
    destaque: true,
  },
];

// Permite que o servidor de pagamento (api/checkout.js) leia este
// mesmo catálogo — não remova esta linha.
if (typeof module !== "undefined") module.exports = { CONFIG, PRODUTOS };
