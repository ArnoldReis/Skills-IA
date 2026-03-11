---
name: database-index-unused-detector
description: Identifica índices que não estão sendo utilizados pelo otimizador de queries, economizando espaço e CPU em escritas.
---
# `database-index-unused-detector`
Escrita mais rápida e menos redundância no disco.
## Regras
1. Analise estatísticas de uso de índice (`pg_stat_user_indexes` no Postgres).
2. Remova índices redundantes que podem ser cobertos por outros índices existentes.
3. Lembre-se que cada índice extra lentifica operações de INSERT, UPDATE e DELETE.
