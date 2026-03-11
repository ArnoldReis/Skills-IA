---
name: database-sharding-architecture-master
description: Implementa Sharding Horizontal para distribuir dados entre múltiplos bancos de dados e suportar crescimento massivo.
---
# `database-sharding-architecture-master`
Escalando o armazenamento além dos limites de uma única máquina.
## Regras
1. Escolha uma "Shard Key" que garanta uma distribuição uniforme dos dados (ex: `user_id` via hash).
2. Evite consultas que precisem cruzar dados de múltiplos shards (Cross-shard joins) devido à alta latência.
3. Implemente um "Shard Mapping" dinâmico para permitir a adição de novos shards sem downtime.
---
