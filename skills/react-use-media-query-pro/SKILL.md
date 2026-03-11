---
name: react-use-media-query-pro
description: Hook de alto nível para checagem responsiva via JS (Breakpoints).
---
# `react-use-media-query-pro`
Lógica de interface que responde ao tamanho da tela.
## Regras
1. Utilize o método `window.matchMedia`.
2. Garanta que o hook remova o listener no cleanup para não vazar memória.
3. Forneça breakpoints padrão (sm, md, lg, xl).
