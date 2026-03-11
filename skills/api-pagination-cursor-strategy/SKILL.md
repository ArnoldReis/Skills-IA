---
name: api-pagination-cursor-strategy
description: Implementa paginação baseada em cursor para listas massivas, evitando os problemas de performance do offset.
---
# `api-pagination-cursor-strategy`
Paginação performática que não fica lenta com o tempo.
## Regras
1. Utilize um campo único e ordenado (ex: ID ou CreatedAt) como cursor.
2. Retorne o cursor do último item da página atual para ser usado na próxima.
3. Garanta que a consulta SQL utilize índices para o campo do cursor.
