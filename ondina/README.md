# Ondina

Loja online de cabelo humano. Tudo é vendido em **amarrado fechado de 100g**
(90g de cabelo + 10g do elástico de amarração) — nunca em gramas fracionadas.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | A loja pronta para publicar (gerada, não editar à mão) |
| `index-corpo.html` | O corpo da página — é aqui que o layout é editado |
| `produtos.js` | **Catálogo, preços e configurações — o arquivo do dia a dia** |

`index.html` é `index-corpo.html` embrulhado no cabeçalho HTML. Depois de
mexer no corpo, gere de novo antes de publicar.

## O que editar em `produtos.js`

- `CONFIG.whatsapp` — 55 + DDD + número, só dígitos
- `CONFIG.peso` — os 100g / 90g / 10g que o site explica na seção da balança
- `CONFIG.frete` — frete grátis e prazos
- `PRODUTOS` — um objeto por amarrado: origem, textura, comprimento, preço e cor
- `DEPOIMENTOS` — só depoimentos reais; com a lista vazia a seção não aparece

## Fotos

Cada produto aceita `foto: "fotos/nome-do-arquivo.jpg"`. Enquanto não houver
foto, o site desenha uma mecha na cor informada em `tom`. Crie a pasta
`ondina/fotos/` e use um arquivo por produto.

## Publicação

Site estático. Na Vercel, criar um projeto apontando para este repositório
com **Root Directory = `ondina`**, para não conflitar com o outro site
que vive na raiz.
