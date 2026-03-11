---
name: cassandra-data-modeling-pro
description: Desenha modelos de dados para Cassandra focados em leitura rápida e escalabilidade horizontal (Query-First Design).
---
# `cassandra-data-modeling-pro`
Escalabilidade massiva baseada no padrão de acesso.
## Regras
1. Desenhe as tabelas baseando-se nas queries, não na normalização.
2. Escolha cuidadosamente a Partition Key para evitar "Hot Partitions".
3. Evite o uso de ALLOW FILTERING em produção.
