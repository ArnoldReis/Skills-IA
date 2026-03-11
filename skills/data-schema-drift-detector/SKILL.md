---
name: data-schema-drift-detector
description: Monitora divergências entre o esquema esperado (código/migrações) e o esquema real em produção (Schema Drift).
---
# `data-schema-drift-detector`
Sincronia perfeita entre a aplicação e o banco de dados.
## Regras
1. Compare periodicamente metadados do banco (tabelas, colunas, tipos) com o estado definido no repositório.
2. Alerte se surgirem colunas manuais ou tabelas fantasmagóricas que não passaram pelo pipeline de migração.
3. Garanta que todas as réplicas possuam exatamente o mesmo esquema do servidor master.
---
