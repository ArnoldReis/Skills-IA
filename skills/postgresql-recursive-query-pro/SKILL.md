---
name: postgresql-recursive-query-pro
description: Implementa consultas recursivas (WITH RECURSIVE) para manipular estruturas hierárquicas e grafos no PostgreSQL.
---
# `postgresql-recursive-query-pro`
Navegação profunda em árvores de dados.
## Regras
1. Utilize `UNION ALL` para combinar o caso base com a recursão.
2. Certifique-se de que a condição de parada seja clara para evitar loops infinitos.
3. Utilize índices nas colunas de chave estrangeira (ParentID) para performance.
