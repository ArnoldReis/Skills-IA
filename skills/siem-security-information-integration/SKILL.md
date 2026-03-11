---
name: siem-security-information-integration
description: Integra logs de segurança com ferramentas SIEM (Splunk, Elastic Security) para correlação de eventos e resposta a incidentes.
---
# `siem-security-information-integration`
A torre de controle central para todos os eventos de segurança.
## Regras
1. Padronize o formato dos seus logs de segurança (ex: ECS ou CEF) para facilitar a indexação e análise no SIEM.
2. Configure regras de correlação que detectem padrões de ataque complexos (ex: múltiplos logins falhos seguidos de uma alteração de senha).
3. Mantenha os logs em armazenamento quente por tempo suficiente para investigações imediatas.
---
