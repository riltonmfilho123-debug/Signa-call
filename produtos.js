// ============================================================
//  CONFIGURAÇÃO DA LOJA — edite só este arquivo!
// ============================================================
//  1. Troque o nome da loja e o número do WhatsApp abaixo.
//     O WhatsApp deve estar no formato: 55 + DDD + número
//     (só números, sem espaços). Ex.: "5511987654321"
//  2. Quando criar suas lojas no Mercado Livre / Shopee /
//     Instagram, cole os links abaixo (ou deixe "" para
//     esconder o botão).
// ============================================================

const CONFIG = {
  nomeDaLoja: "Caramelo Pet",
  // Frase que aparece abaixo do título (deixe "" para usar a padrão)
  slogan: "Escolha os produtos, monte o carrinho e finalize o pedido direto no nosso WhatsApp. Simples assim.",
  whatsapp: "5500000000000", // <<< TROQUE PELO SEU NÚMERO
  instagram: "",             // ex.: "https://instagram.com/caramelopet"
  mercadoLivre: "",          // ex.: "https://loja.mercadolivre.com.br/caramelo-pet"
  shopee: "",                // ex.: "https://shopee.com.br/caramelopet"
};

// ============================================================
//  PRODUTOS
// ============================================================
//  Para cada produto:
//    nome      → nome que aparece no site
//    preco     → preço em reais (use ponto, ex.: 29.90)
//    categoria → Passeio, Brinquedos, Alimentação, Conforto ou Higiene
//                (pode criar categorias novas — os filtros são automáticos)
//    descricao → uma frase curta de venda
//    emoji     → aparece enquanto você não tem foto
//    foto      → opcional: caminho de uma foto sua,
//                ex.: foto: "fotos/coleira.jpg"
//                (crie uma pasta "fotos" ao lado deste arquivo)
//
//  Estes produtos são EXEMPLOS típicos da 25 de Março / Brás.
//  Apague e coloque os seus!
// ============================================================

const PRODUTOS = [
  {
    nome: "Coleira ajustável com fivela",
    preco: 19.9,
    categoria: "Passeio",
    descricao: "Nylon reforçado, tamanhos P ao G, várias cores.",
    emoji: "🦮",
  },
  {
    nome: "Guia retrátil 5 metros",
    preco: 39.9,
    categoria: "Passeio",
    descricao: "Trava de segurança e cabo confortável, até 15 kg.",
    emoji: "🐕",
  },
  {
    nome: "Peitoral acolchoado",
    preco: 34.9,
    categoria: "Passeio",
    descricao: "Não força o pescoço — ideal pra cães que puxam.",
    emoji: "🎽",
  },
  {
    nome: "Mordedor de borracha maciça",
    preco: 14.9,
    categoria: "Brinquedos",
    descricao: "Resistente até pra destruidores profissionais.",
    emoji: "🦴",
  },
  {
    nome: "Bolinha com apito",
    preco: 9.9,
    categoria: "Brinquedos",
    descricao: "O clássico que nenhum cachorro resiste.",
    emoji: "🎾",
  },
  {
    nome: "Corda dental trançada",
    preco: 12.9,
    categoria: "Brinquedos",
    descricao: "Diverte e ainda ajuda a limpar os dentes.",
    emoji: "🪢",
  },
  {
    nome: "Comedouro duplo inox",
    preco: 29.9,
    categoria: "Alimentação",
    descricao: "Base antiderrapante, fácil de lavar.",
    emoji: "🥣",
  },
  {
    nome: "Bifinho de carne 500 g",
    preco: 24.9,
    categoria: "Alimentação",
    descricao: "O petisco pra hora do agrado (ou do adestramento).",
    emoji: "🍖",
  },
  {
    nome: "Caminha redonda de pelúcia",
    preco: 59.9,
    categoria: "Conforto",
    descricao: "Macia e quentinha, tamanhos P, M e G.",
    emoji: "🛏️",
  },
  {
    nome: "Moletom pet com capuz",
    preco: 44.9,
    categoria: "Conforto",
    descricao: "Estiloso e quentinho pros dias frios.",
    emoji: "🧥",
  },
  {
    nome: "Tapete higiênico — 30 unidades",
    preco: 49.9,
    categoria: "Higiene",
    descricao: "Super absorvente, com atrativo canino.",
    emoji: "🧻",
  },
  {
    nome: "Shampoo neutro 500 ml",
    preco: 21.9,
    categoria: "Higiene",
    descricao: "Pelos macios e cheirosos, pH balanceado.",
    emoji: "🧴",
  },
];
