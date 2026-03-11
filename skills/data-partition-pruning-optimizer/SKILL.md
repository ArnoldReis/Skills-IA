---
name: data-partition-pruning-optimizer
description: Otimiza as condições de busca (`WHERE`) para garantir que o banco filtre divisões de dados físicas (Partition Pruning).
---
# `data-partition-pruning-optimizer`
Leitura ultra-rápida ignorando dados irrelevantes.
## Regras
1. Sempre inclua a chave de particionamento (ex: `created_at` ou `region_id`) em todas as queries de busca.
2. Evite funções ou transformações na chave de particionamento na cláusula WHERE (ex: `WHERE YEAR(date) = 2023`).
3. Verifique com `EXPLAIN` se o número de partições lidas realmente diminuiu com a sua query.
---
