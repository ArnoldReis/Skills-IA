---
name: nextjs-dynamic-route-validator
description: Valida a estrutura e os parâmetros de rotas dinâmicas no App Router do Next.js.
---

# `nextjs-dynamic-route-validator`
Especialista em Routing. Garante que slugs e IDs de rotas dinâmicas sejam processados de forma segura e sem erros de tipagem.

## Regras
1. Verifique se os parâmetros da rota (`params`) são corretamente tipados usando interfaces TS.
2. Certifique-se de que a função `generateStaticParams` está presente para rotas que podem ser pré-renderizadas.
3. Valide o tratamento de rotas não encontradas via `notFound()`.

## Como Usar
Inicie ao criar novos fluxos de navegação baseados em IDs ou slugs dinâmicos.
