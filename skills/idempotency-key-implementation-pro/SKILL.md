---
name: idempotency-key-implementation-pro
description: Implementa suporte a chaves de idempotência para garantir que requisições repetidas não causem efeitos colaterais duplos.
---
# `idempotency-key-implementation-pro`
Segurança contra repetições acidentais em operações críticas.
## Regras
1. Exija o header `Idempotency-Key` em todos os endpoints de criação ou alteração (POST/PUT).
2. Armazene o resultado da primeira execução associado à chave por um período de 24h.
3. Se a mesma chave for enviada novamente, retorne o resultado cacheado imediatamente sem reprocessar.
---
