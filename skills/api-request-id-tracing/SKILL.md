---
name: api-request-id-tracing
description: Atribui um ID único a cada requisição de entrada para rastreamento longitudinal em logs e microserviços.
---
# `api-request-id-tracing`
Fio de Ariadne para debugar fluxos complexos.
## Regras
1. Gere o ID no Gateway ou no primeiro servidor que receber a requisição.
2. Propague o ID para todos os serviços internos via headers (ex: `X-Request-Id`).
3. Inclua o ID em todas as respostas de erro para facilitar o suporte.
