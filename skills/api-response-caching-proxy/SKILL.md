---
name: api-response-caching-proxy
description: Intercepta e armazena respostas de API em cache para acelerar requisições idênticas subsequentes.
---
# `api-response-caching-proxy`
Respostas ultra-rápidas para dados que não mudam frequentemente.
## Regras
1. Utilize o Header `ETag` para validação condicional de cache.
2. Armazene o body da resposta no Redis usando a URL + Query Params como chave.
3. Não faça cache de rotas que contenham dados sensíveis por padrão.
