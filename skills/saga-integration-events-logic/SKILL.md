---
name: saga-integration-events-logic
description: Define como integrar eventos de domínio em transações Saga para manter a consistência entre microserviços.
---
# `saga-integration-events-logic`
A cola que mantém a consistência em processos de múltiplos passos.
## Regras
1. Utilize eventos de sucesso (`OrderCreated`) e de falha (`StockReservedFailed`) para guiar o fluxo da Saga.
2. Garanta que cada evento carregue contexto suficiente para permitir a ação de compensação (Rollback) se necessário.
3. Evite dependências cíclicas entre eventos; mantenha o fluxo linear ou hierárquico.
---
