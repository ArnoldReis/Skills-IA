---
name: load-shedding-admission-control-pro
description: Implementa mecanismos de Load Shedding para rejeitar requisições de baixa prioridade quando o sistema está operando perto da saturação.
---
# `load-shedding-admission-control-pro`
Salvando o sistema do colapso total sob carga extrema.
## Regras
1. Monitore sinais de saturação como CPU > 90% ou tamanhos de fila de eventos crescentes.
2. Rejeite requisições de background, bots e telemetria para garantir recursos para os fluxos vitais do usuário.
3. Retorne `503 Service Unavailable` rapidamente para que o cliente não gaste recursos esperando em vão.
---
