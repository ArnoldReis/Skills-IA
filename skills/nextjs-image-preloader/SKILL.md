---
name: nextjs-image-preloader
description: Otimiza o carregamento de imagens críticas através de links de prefetch no head da página.
---
# `nextjs-image-preloader`
Visual imediato eliminando o flash de imagens brancas.
## Regras
1. Identifique imagens no "Above the Fold" de páginas subsequentes.
2. Adicione `<link rel="preload">` dinamicamente conforme a intenção do usuário.
3. Mantenha o equilíbrio para não competir com o JS crítico da página atual.
