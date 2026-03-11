---
name: automation-database-migration-pipeline
description: Automatiza o processo de migração de banco de dados dentro do pipeline de CI/CD para evitar erros manuais.
---
# `automation-database-migration-pipeline`
Mudanças de schema coordenadas e seguras em escala.
## Regras
1. Nunca rode migrações manualmente em produção; o pipeline deve ser o único responsável pela execução.
2. Implemente migrações que sejam compatíveis com a versão anterior do código (Forward Compatibility) para evitar downtime.
3. Garanta que haja um backup automático do banco antes de iniciar migrações destrutivas.
---
