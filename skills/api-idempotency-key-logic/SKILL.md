---
name: api-idempotency-key-logic
description: Implementa o uso de chaves de idempotência em APIs REST para permitir que o cliente repita requisições sem causar efeitos colaterais duplos.
---
# `api-idempotency-key-logic`
Proteção contra págos duplos e criações acidentais na API.
## Regras
1. Exija o header `Idempotency-Key` (ou similar) em métodos não-idempotentes (POST/PATCH).
2. Armazene a chave e o resultado da resposta original por um período curto (ex: 24h).
3. Se a mesma chave for enviada novamente, retorne o resultado armazenado sem re-processar a lógica de negócio.
---
