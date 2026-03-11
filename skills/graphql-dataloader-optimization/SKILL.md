---
name: graphql-dataloader-optimization
description: Implementa o padrão DataLoader para resolver o problema N+1 em queries GraphQL através de batching e caching de requests.
---
# `graphql-dataloader-optimization`
Performance extrema para resoluções de dados em massa no GraphQL.
## Regras
1. Agrupe (Batch) múltiplas requisições de buscar IDs individuais em uma única query de banco `WHERE id IN (...)`.
2. Utilize o cache por request do DataLoader para evitar buscar o mesmo objeto múltiplas vezes na mesma query-tree.
3. Garanta que o loader seja instanciado por requisição para evitar vazamento de cache entre diferentes usuários.
---
