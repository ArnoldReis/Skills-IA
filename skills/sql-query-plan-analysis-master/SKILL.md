---
name: sql-query-plan-analysis-master
description: Analisa planos de execução de queries (Query Plans) para identificar Table Scans, gargalos de Join e ordenações custosas.
---
# `sql-query-plan-analysis-master`
Entendendo como o banco de dados enxerga o seu código SQL.
## Regras
1. Identifique `Sequential Scans` em tabelas grandes e substitua-os por `Index Scans`.
2. Otimize Joins de tabelas massivas garantindo que os campos de ligação estejam indexados e possuam tipos compatíveis.
3. Evite `SELECT *` para reduzir a carga de I/O e o uso de memória no processamento de resultados.
---
