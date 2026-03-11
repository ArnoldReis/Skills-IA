---
name: api-idempotency-key-manager
description: Gerencia chaves de idempotência para garantir que requisições duplicadas não gerem efeitos colaterais repetidos.
---
# `api-idempotency-key-manager`
Segurança contra cliques duplos em transações financeiras.
## Regras
1. Utilize o header `Idempotency-Key` enviado pelo cliente.
2. Salve o resultado da primeira execução associado à chave por 24h.
3. Se a mesma chave for enviada, retorne o resultado salvo imediatamente sem reprocessar.
