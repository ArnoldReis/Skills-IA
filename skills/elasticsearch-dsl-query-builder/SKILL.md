---
name: elasticsearch-dsl-query-builder
description: Constrói consultas complexas em Query DSL para buscas full-text avançadas e análises no Elasticsearch.
---
# `elasticsearch-dsl-query-builder`
Busca inteligente e veloz.
## Regras
1. Utilize `bool` queries para combinar filtros (`filter`) e termos de busca (`must`).
2. Utilize `fuzziness` para lidar com erros de digitação dos usuários.
3. Configure `aggs` (Aggregations) para gerar facetas de busca (filtros laterais).
