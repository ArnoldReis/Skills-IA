---
name: css-subgrid-layout-master
description: Domina o uso de CSS Subgrid para alinhar elementos aninhados com o grid pai, criando layouts complexos e consistentes.
---
# `css-subgrid-layout-master`
Alinhamento perfeito entre grids aninhados sem gambiarras.
## Regras
1. Utilize `grid-template-columns: subgrid` ou `grid-template-rows: subgrid` em itens que são containers de grid.
2. Garanta que o navegador suporte subgrid através de `@supports (grid-template-columns: subgrid)`.
3. Utilize subgrid para alinhar cabeçalhos e rodapés de cards de tamanhos variados dentro de uma mesma linha do grid principal.
---
