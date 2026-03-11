---
name: write-heavy-optimization-pro
description: Otimiza sistemas com alto volume de escrita usando buffers, logs de commit e bancos focados em append-only (LSM Trees).
---
# `write-heavy-optimization-pro`
Performance extrema para ingestão massiva de dados.
## Regras
1. Utilize o padrão de Append-Only para evitar buscas de disco durante a escrita (sequencial é mais rápido).
2. Agrupe múltiplas escritas em um único lote (Batching) para reduzir o overhead de transações.
3. Considere bancos de dados com arquitetura LSM Tree (Cassandra, ScyllaDB) para volumes de escrita titânicos.
---
