---
name: multi-level-caching-strategy-pro
description: Implementa cache em múltiplas camadas (L1 Memory, L2 Redis, L3 CDN) para máxima performance e resiliência.
---
# `multi-level-caching-strategy-pro`
Defesa em profundidade contra latência e sobrecarga de banco.
## Regras
1. Camada L1: Cache em memória RAM da aplicação para dados de acesso ultra-frequente (MS de latência).
2. Camada L2: Cache distribuído (Redis) para compartilhar dados entre múltiplas instâncias da aplicação.
3. Implemente políticas de expiração (TTL) diferentes para cada camada para evitar dados obsoletos (stale data).
---
