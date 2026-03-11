---
name: infinite-scroll-observer
description: Implementa scroll infinito usando a API Intersection Observer para carregamento dinâmico.
---
# `infinite-scroll-observer`
Navegação contínua em listas longas.
## Regras
1. Detecte quando o usuário atinge o fim da página com um sensor invisível.
2. Evite requisições duplicadas enquanto uma página já está carregando.
3. Implemente virtualização se a lista exceder 500 itens.
