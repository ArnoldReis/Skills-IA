---
name: database-backup-integrity-validator
description: Valida a integridade dos backups restaurando-os automaticamente em ambientes isolados para garantir a recuperação.
---
# `database-backup-integrity-validator`
A certeza absoluta de que seu seguro contra desastres funciona.
## Regras
1. Um backup que nunca foi restaurado é um backup inexistente.
2. Automatize a restauração de uma amostra aleatória dos backups em um container temporário.
3. Execute testes de sanidade básica (contagem de linhas, integridade de tabelas críticas) após o restore.
---
