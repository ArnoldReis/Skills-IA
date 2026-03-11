---
name: backend-audit-log-emitter
description: Registra trilhas de auditoria (Audit Logs) para ações críticas realizadas por usuários.
---
# `backend-audit-log-emitter`
Histórico imutável de quem alterou o quê e quando.
## Regras
1. Capture o ID do usuário, a ação, a entidade e o timestamp.
2. Salve o estado "Antes" e "Depois" dos registros alterados.
3. Garanta que o log de auditoria seja salvo em uma tabela ou serviço separado.
