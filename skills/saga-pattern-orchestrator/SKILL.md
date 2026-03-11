---
name: saga-pattern-orchestrator
description: Gerencia transações distribuídas complexas via um orquestrador central que coordena os passos e compensações.
---
# `saga-pattern-orchestrator`
Consistência de dados em ambientes distribuídos via coordenação central.
## Regras
1. Utilize o Orquestrador para manter o estado global da transação e decidir o próximo passo.
2. Defina ações de compensação (Rollback lógico) para cada etapa que pode falhar.
3. Garanta que todas as operações sejam idempotentes, caso o orquestrador precise repetir um passo.
---
