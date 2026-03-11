---
name: zero-downtime-migration
description: Gerador de scripts SQL e migrações multi-fase para não gerar travamentos (Table Locking).
---

# `zero-downtime-migration`
Skill especializada em transações de banco de dados e Prisma/Drizzle.

## Regras
1. NUNCA gere migrações que dão `DROP COLUMN` imediatamente.
2. Divida as migrações em 3 etapas de Backfill se a tabela tiver mais de 100k rows.
3. Se gerar constraints, faça via `CONCURRENTLY` (No PostgreSQL).
