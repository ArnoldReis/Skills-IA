---
name: api-idempotence-redis-implementation
description: Implementa idempotência de requisições usando Redis para garantir que a mesma operação não seja executada duas vezes acidentalmente.
---
# `api-idempotence-redis-implementation`
Segurança contra cliques duplos e retentativas de rede em operações críticas.
## Regras
1. Utilize uma chave única (Idempotency-Key) enviada pelo cliente para identificar a requisição.
2. Armazene o resultado da primeira execução no Redis com um TTL curto (ex: 24 horas).
3. Se a mesma chave for recebida novamente, retorne o resultado armazenado sem processar a lógica no banco de dados.
---
