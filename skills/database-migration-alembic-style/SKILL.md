---
name: database-migration-alembic-style
description: Gerencia mudanças incrementais no schema do banco de dados (Migrations) com suporte a rollback.
---
# `database-migration-alembic-style`
Evolução controlada e segura dos dados.
## Regras
1. Nunca altere o banco diretamente sem uma migration.
2. Cada migration deve ter um script de subida (`up`) e um de descida (`down`).
3. Verifique a integridade dos dados antes de aplicar migrations em produção.
