/* ============================================================
   PRÍNCIPE DOS CABELOS — configuração da loja
   ============================================================
   Só este arquivo precisa ser editado no dia a dia.
   Tudo é vendido em AMARRADO DE 100g. Nunca em gramas soltas.
   ============================================================ */

const CONFIG = {
  marca: "Príncipe dos Cabelos",
  assinatura: "Cabelo humano de procedência",

  // 55 + DDD + número, só dígitos
  whatsapp: "5521000000000",
  instagram: "",

  // Peso do amarrado (o site explica isso em vez de esconder)
  peso: {
    total: 100,     // amarrado completo, como o mercado anuncia
    cabelo: 90,     // cabelo puro
    elastico: 10,   // elástico de amarração
  },

  frete: {
    gratis: true,          // frete grátis para todo o Brasil
    prazoCapital: "2 a 5 dias úteis",
    prazoInterior: "4 a 9 dias úteis",
  },

  trocaDias: 7,
};

/* ------------------------------------------------------------
   PRODUTOS
   ------------------------------------------------------------
   origem      → vira o menu (Indiano, Cacheado, Vietnamita...)
   textura     → Liso, Ondulado, Cacho 2, Cacho 3...
   cm          → comprimento
   preco       → preço de UM amarrado de 100g
   tom         → [cor base, reflexo] — desenha a mecha enquanto
                 não há foto. Troque por foto assim que tiver:
                 foto: "fotos/indiano-65.jpg"
   destaque    → aparece na vitrine principal
   esgotado    → true tira do carrinho e mostra aviso
   ------------------------------------------------------------ */

const PRODUTOS = [
  { origem: "Indiano", textura: "Liso", cm: 35, preco: 290, tom: ["#2A1B12", "#6B4423"], cor: "Castanho escuro" },
  { origem: "Indiano", textura: "Liso", cm: 45, preco: 380, tom: ["#2A1B12", "#6B4423"], cor: "Castanho escuro" },
  { origem: "Indiano", textura: "Liso", cm: 55, preco: 450, tom: ["#2A1B12", "#6B4423"], cor: "Castanho escuro", destaque: true },
  { origem: "Indiano", textura: "Liso", cm: 65, preco: 520, tom: ["#241710", "#7A4E28"], cor: "Castanho escuro", destaque: true },
  { origem: "Indiano", textura: "Liso", cm: 75, preco: 620, tom: ["#1F140E", "#8A5A2E"], cor: "Castanho escuro", destaque: true },

  { origem: "Cacheado", textura: "Cacho 2", cm: 35, preco: 310, tom: ["#20150F", "#5E3C20"], cor: "Castanho" },
  { origem: "Cacheado", textura: "Cacho 3", cm: 55, preco: 470, tom: ["#1C120C", "#553618"], cor: "Castanho escuro" },
  { origem: "Cacheado", textura: "Cacho 3", cm: 65, preco: 560, tom: ["#1C120C", "#553618"], cor: "Castanho escuro", destaque: true },

  { origem: "Vietnamita", textura: "Liso", cm: 55, preco: 540, tom: ["#150F0C", "#4A2F1B"], cor: "Preto natural" },
  { origem: "Vietnamita", textura: "Ondulado", cm: 60, preco: 580, tom: ["#1A120D", "#5A3A1F"], cor: "Castanho escuro" },

  { origem: "Peruano", textura: "Liso", cm: 60, preco: 590, tom: ["#2E1E13", "#8A5C30"], cor: "Castanho médio", destaque: true },

  { origem: "Loiro", textura: "Liso", cm: 70, preco: 1100, tom: ["#B08655", "#EBD3A8"], cor: "Loiro mel", destaque: true },
  { origem: "Brasileiro", textura: "Liso", cm: 58, preco: 1150, tom: ["#33210F", "#9C6B35"], cor: "Castanho iluminado" },
];

/* ------------------------------------------------------------
   DEPOIMENTOS — só depoimentos REAIS de clientes.
   Enquanto a lista estiver vazia, a seção não aparece no site.
   Formato: { nome: "", cidade: "", texto: "" }
   ------------------------------------------------------------ */

const DEPOIMENTOS = [];

if (typeof module !== "undefined") module.exports = { CONFIG, PRODUTOS, DEPOIMENTOS };
