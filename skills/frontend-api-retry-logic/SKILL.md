---
name: frontend-api-retry-logic
description: Implementa tentativas automáticas (Retries) com backoff exponencial para chamadas de rede falhas.
---
# `frontend-api-retry-logic`
Resiliência em conexões instáveis.
## Regras
1. Tente novamente até 3 vezes antes de disparar erro total.
2. Aumente o tempo de espera entre cada tentativa (Exponential Backoff).
3. Não repita chamadas que retornaram erro 4xx (Client Errors).
