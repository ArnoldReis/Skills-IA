---
name: shared-database-anti-pattern-monitor
description: Detecta e alerta sobre acoplamentos perigosos onde múltiplos microserviços compartilham as mesmas tabelas de banco.
---
# `shared-database-anti-pattern-monitor`
Prevenindo o "Monolito Distribuído" causado pelo banco compartilhado.
## Regras
1. Identifique múltiplos usuários de banco de dados com permissão de escrita nas mesmas tabelas.
2. Alerte sobre mudanças de schema que impactam serviços que não são os "donos" lógicos daquela entidade.
3. Incentive a migração de dados compartilhados para via API (Service Interface).
---
