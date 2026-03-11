---
name: database-auditing-trigger-pro
description: Cria triggers de auditoria automáticas para registrar quem, quando e o que foi alterado em tabelas críticas.
---
# `database-auditing-trigger-pro`
Rastreabilidade total e histórica de cada mudança.
## Regras
1. Salve o estado anterior (OLD) e o novo estado (NEW) em uma tabela de auditoria separada.
2. Inclua metadados como `user_id`, `ip_address` e `action_type` (INSERT, UPDATE, DELETE).
3. Utilize campos JSONB para armazenar os payloads e garantir flexibilidade se o esquema da tabela original mudar.
---
