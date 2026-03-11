---
name: canary-rollout-automation-flagger
description: Automatiza lançamentos do tipo Canary usando ferramentas como Flagger ou Istio para reduzir o raio de exposição de novos deploys.
---
# `canary-rollout-automation-flagger`
Progressão de tráfego baseada em métricas de sucesso em tempo real.
## Regras
1. Defina "Análises de Métricas" automáticas (Erro %, Latência) que determinam se o tráfego Canary deve aumentar ou ser revertido.
2. Comece com uma porcentagem pequena (ex: 5%) e aumente gradualmente conforme a confiança do sistema aumenta.
3. Automatize o rollback instantâneo caso qualquer limite de erro seja atingido durante a fase de análise.
---
