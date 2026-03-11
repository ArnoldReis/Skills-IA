---
name: prisma-soft-delete-middleware
description: Implementa deleção lógica (Soft Delete) transparente usando middlewares do Prisma ORM.
---
# `prisma-soft-delete-middleware`
Proteção contra perda acidental de dados.
## Regras
1. Capture tentativas de `delete` e as transforme em `update` com a flag `deleted: true`.
2. Filtre automaticamente registros deletados em consultas `findMany` e `findUnique`.
3. Garanta que o campo `deletedAt` esteja presente em todas as tabelas.
