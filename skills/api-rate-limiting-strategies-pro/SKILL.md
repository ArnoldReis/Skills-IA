---
name: api-rate-limiting-strategies-pro
description: Implementa estratégias de Rate Limiting (Token Bucket, Fixed Window, Sliding Log) para proteger a API contra abusos.
---
# `api-rate-limiting-strategies-pro`
Mantendo a disponibilidade da sua API sob ataque ou uso excessivo.
## Regras
1. Identifique o usuário pela chave da API ou endereço IP e aplique limites diferenciados por plano de uso.
2. Retorne o código de status HTTP `429 Too Many Requests` e inclua o header `Retry-After`.
3. Utilize um armazenamento rápido (Redis) para manter os contadores de requisições com baixa latência.
---
