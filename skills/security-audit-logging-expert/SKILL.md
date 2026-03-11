---
name: security-audit-logging-expert
description: Implementa logs de auditoria imutáveis para registrar todas as ações críticas e alterações de dados sensíveis.
---
# `security-audit-logging-expert`
Rastreabilidade total para saber quem fez o quê, quando e onde.
## Regras
1. Registre o `Actor` (usuário), a `Action` (ação), o `Target` (recurso afetado) e o `Timestamp` preciso em cada log de auditoria.
2. Garanta que logs de auditoria não possam ser alterados ou deletados pela própria aplicação ou por administradores comuns.
3. Implemente alertas em tempo real para ações de alto risco, como deleções massivas ou exportações de dados.
---
