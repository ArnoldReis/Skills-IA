---
name: api-rate-limiting-strategy
description: Protege endpoints de API contra abusos e ataques DoS/Brute-force limitando o número de requisições por IP ou usuário.
---
# `api-rate-limiting-strategy`
Resiliência e justiça no uso de recursos da API.
## Regras
1. Utilize o algoritmo Token Bucket ou Fixed Window para controle de fluxo.
2. Retorne o status `429 Too Many Requests` e inclua o header `Retry-After`.
3. Armazene os contadores em um banco in-memory como Redis para baixa latência.
---
