---
name: frontend-bundle-analyzer
description: Analisa dependências e identifica pacotes pesados ou duplicados no bundle final.
---

# `frontend-bundle-analyzer`
Auditor de peso de aplicação. Ajuda a manter o FCP (First Contentful Paint) baixo removendo lixo de dependências.

## Regras
1. Identifique pacotes que possuem alternativas nativas (ex: moment.js -> date-fns ou Intl).
2. Sinalize dependências "Large" detectadas no `package.json` sem uso aparente no código.
3. Sugira Lazy Loading (Dynamic Imports) para componentes pesados que não são críticos no carregamento inicial.

## Como Usar
Inicie após um build de produção para entender o que está inflando os chunks de JavaScript.
