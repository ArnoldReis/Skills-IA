---
name: database-user-privilege-limiter
description: Aplica o princípio do privilégio mínimo para usuários de banco de dados, configurando permissões granulares.
---
# `database-user-privilege-limiter`
Segurança na camada de acesso aos dados.
## Regras
1. Nunca utilize o usuário `postgres` ou `sa` na aplicação.
2. Crie usuários específicos para leitura (Read-only) e escrita (Read-write).
3. Restrinja o acesso de schemas e tabelas apenas ao que o microserviço realmente precisa.
