---
name: sql-foreign-key-cascade-manager
description: Gerencia e audita o uso de `ON DELETE CASCADE` para evitar deleções massivas e acidentais de dados relacionados.
---
# `sql-foreign-key-cascade-manager`
Controle preciso sobre a propagação de deleções.
## Regras
1. Utilize Cascade apenas em tabelas de dependência forte (ex: Order -> OrderItems).
2. Evite Cascade em tabelas mestras ou globais (ex: User -> Projects) para prevenir perda catastrófica de dados.
3. Considere usar `ON DELETE SET NULL` ou `RESTRICT` para maior segurança e auditoria manual.
---
