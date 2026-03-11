---
name: database-sharding-logic-pro
description: Implementa lógica de sharding horizontal para distribuir volumes massivos de dados entre múltiplos bancos de dados.
---
# `database-sharding-logic-pro`
Escalabilidade infinita via particionamento físico.
## Regras
1. Utilize uma função de hash consistente para distribuir os IDs entre os shards.
2. Evite transações que envolvam múltiplos shards (Cross-shard transactions).
3. Mantenha um catálogo de metadados para saber onde cada dado reside.
