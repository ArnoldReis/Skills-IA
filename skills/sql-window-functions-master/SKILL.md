---
name: sql-window-functions-master
description: Domina funções de janela (OVER, PARTITION BY, RANK) para análises estatísticas e cálculos complexos em SQL.
---
# `sql-window-functions-master`
Análises poderosas sem a necessidade de múltiplos Joins ou agregações pesadas.
## Regras
1. Utilize `PARTITION BY` para segmentar os cálculos (ex: média de vendas por categoria).
2. Utilize `ORDER BY` dentro da cláusula `OVER` para funções de ranking e navegação (Lead/Lag).
3. Prefira window functions a subqueries correlacionadas para melhor performance de leitura.
---
