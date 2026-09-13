# Caramelo Pet — loja online

Site de loja pet com carrinho de compras e pedido finalizado pelo WhatsApp,
mais planilha de precificação para vender também no Mercado Livre e na Shopee.

## O que tem aqui

| Arquivo | O que é |
|---|---|
| `index.html` | O site da loja (não precisa mexer) |
| `produtos.js` | **Seus produtos e configurações — é aqui que você edita tudo** |
| `planilha-precificacao.xlsx` | Planilha que calcula o preço de venda em cada canal |

## Como personalizar a loja

Abra o arquivo `produtos.js` em qualquer editor de texto:

1. **Nome da loja e WhatsApp**: troque `nomeDaLoja` e `whatsapp`
   (formato: `55` + DDD + número, só dígitos, ex.: `"5511987654321"`).
2. **Links**: quando criar suas lojas no Mercado Livre, Shopee e Instagram,
   cole os links nos campos correspondentes.
3. **Produtos**: apague os exemplos e cadastre os seus. Cada produto tem
   nome, preço, categoria, descrição e um emoji (ou uma foto: crie uma
   pasta `fotos/` e use `foto: "fotos/nome-do-arquivo.jpg"`).

Os filtros de categoria são criados automaticamente a partir dos produtos.

## Como colocar o site no ar (grátis)

O site é estático — funciona em qualquer hospedagem gratuita:

- **Vercel** (vercel.com) ou **Netlify** (netlify.com): crie uma conta,
  conecte este repositório do GitHub e pronto — cada alteração publicada
  no GitHub atualiza o site sozinha.
- **GitHub Pages**: em Settings → Pages do repositório, escolha a branch
  e salve.

Depois dá para ligar um domínio próprio (ex.: `caramelopet.com.br`,
registrado no registro.br).

## Fluxo de venda

1. Cliente monta o carrinho no site.
2. O pedido chega formatado no seu WhatsApp (produtos, quantidades e total).
3. Você combina pagamento (Pix/cartão) e envio na conversa.

## Precificação

Use a `planilha-precificacao.xlsx`: preencha o custo de compra de cada
produto (atacado da 25 de Março / Brás) e a margem desejada — ela calcula o
preço mínimo de venda no site, no Mercado Livre e na Shopee, já descontando
as comissões e taxas fixas de cada plataforma. As taxas ficam na aba
"Taxas" e devem ser conferidas nos canais oficiais, pois mudam com frequência.
