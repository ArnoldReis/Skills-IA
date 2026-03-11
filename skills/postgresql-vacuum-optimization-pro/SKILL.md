---
name: postgresql-vacuum-optimization-pro
description: Configura e monitora o processo de VACUUM no PostgreSQL para evitar o "Bloat" de tabelas e índices.
---
# `postgresql-vacuum-optimization-pro`
Saúde física e performance estável do disco.
## Regras
1. Ajuste os parâmetros do `Autovacuum` para tabelas com alto volume de escritas e deleções.
2. Identifique tabelas com alto `bloat` que precisam de um VACUUM FULL cauteloso (bloqueia a tabela).
3. Monitore o `Transaction ID Wraparound` para evitar que o banco recuse novas escritas.
