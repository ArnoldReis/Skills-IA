---
name: postgresql-jsonb-indexing-pro
description: Otimiza a busca em campos JSONB no PostgreSQL usando índices GIN para performance em dados semi-estruturados.
---
# `postgresql-jsonb-indexing-pro`
Poder NoSQL com a robustez do SQL.
## Regras
1. Utilize índices `GIN` para consultas que utilizam os operadores `@>`, `?`, `?&` ou `?|`.
2. Evite índices gigantescos em campos JSON com alta volatilidade de chaves.
3. Utilize índices expressionais para chaves específicas dentro do JSON que são buscadas com frequência.
