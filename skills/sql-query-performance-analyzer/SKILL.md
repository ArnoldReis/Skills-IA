---
name: sql-query-performance-analyzer
description: Analisa planos de execução (EXPLAIN ANALYZE) para identificar gargalos, scans de tabela e otimizar queries lentas.
---
# `sql-query-performance-analyzer`
Performance extrema através da análise de custos de I/O.
## Regras
1. Identifique `Seq Scan` em tabelas grandes e substitua por `Index Scan`.
2. Verifique se o `Cost` estimado pelo planejador condiz com o tempo real de execução.
3. Utilize `JOINs` baseados em chaves indexadas e reduza o número de subqueries aninhadas.
