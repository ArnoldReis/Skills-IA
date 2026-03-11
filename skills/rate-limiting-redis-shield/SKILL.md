---
name: rate-limiting-redis-shield
description: Protege a API contra abusos e ataques de força bruta limitando o número de requisições por IP.
---
# `rate-limiting-redis-shield`
Escudo contra tráfego excessivo.
## Regras
1. Utilize o Redis para manter o contador de requisições de forma atômica.
2. Defina janelas de tempo (ex: 1 minuto) e limites de requisição.
3. Retorne o Status 429 (Too Many Requests) com o header `Retry-After`.
