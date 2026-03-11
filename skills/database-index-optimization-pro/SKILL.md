---
name: database-index-optimization-pro
description: Projeta e otimiza índices de banco de dados (B-Tree, Hash, GIST) para acelerar consultas sem penalizar a performance de escrita.
---
# `database-index-optimization-pro`
O acelerador definitivo para suas consultas SQL.
## Regras
1. Utilize índices compostos para consultas que filtram por múltiplos campos de forma frequente.
2. Evite a "Over-indexing"; cada índice extra aumenta o tempo de INSERT/UPDATE e o consumo de disco.
3. Utilize `EXPLAIN ANALYZE` para verificar se o banco de dados está realmente utilizando os índices criados.
---
