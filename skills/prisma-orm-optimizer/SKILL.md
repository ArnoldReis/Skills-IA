---
name: prisma-orm-optimizer
description: Gerencia e otimiza consultas ao banco de dados usando o Prisma ORM, evitando o problema N+1.
---
# `prisma-orm-optimizer`
Segurança de tipos e performance em consultas SQL.
## Regras
1. Utilize `include` e `select` de forma criteriosa para não trazer dados desnecessários.
2. Utilize `$transaction` para garantir a atomicidade em operações de múltiplos passos.
3. Gere o Prisma Client após cada mudança no schema.
