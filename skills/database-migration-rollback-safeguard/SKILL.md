---
name: database-migration-rollback-safeguard
description: Garante que todas as migrações de banco de dados possuam um plano de reversão (Rollback) testado e seguro.
---
# `database-migration-rollback-safeguard`
Segurança na evolução do esquema de dados.
## Regras
1. Cada migração `up` deve ter uma migração `down` correspondente.
2. Evite migrações destrutivas (drop table/column) sem antes mover os dados para um local seguro.
3. Teste o rollback em ambiente de staging antes de qualquer deploy em produção.
