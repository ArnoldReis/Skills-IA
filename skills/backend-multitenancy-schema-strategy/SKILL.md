---
name: backend-multitenancy-schema-strategy
description: Implementa arquitetura Multitenant (Múltiplos clientes) garantindo isolamento total de dados.
---
# `backend-multitenancy-schema-strategy`
Segurança e privacidade para SaaS de larga escala.
## Regras
1. Utilize um `tenant_id` em todas as tabelas compartilhadas.
2. Implemente Row Level Security (RLS) no banco de dados se apropriado.
3. Garanta que o tenant atual seja identificado via subdomínio ou Header em cada request.
