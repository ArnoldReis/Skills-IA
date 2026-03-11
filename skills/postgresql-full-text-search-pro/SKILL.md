---
name: postgresql-full-text-search-pro
description: Implementa busca textual avançada nativa no PostgreSQL usando tsvector e tsquery com suporte a ranking.
---
# `postgresql-full-text-search-pro`
Motores de busca integrados ao seu banco relacional.
## Regras
1. Converta o texto para `tsvector` usando `to_tsvector` com o dicionário de idioma correto.
2. Utilize índices `GIN` no campo de busca para performance.
3. Utilize `ts_rank` para ordenar os resultados por relevância.
