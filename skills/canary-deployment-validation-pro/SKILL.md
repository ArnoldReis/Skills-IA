---
name: canary-deployment-validation-pro
description: Valida deploys do tipo Canary enviando uma pequena fração do tráfego real para a nova versão antes da liberação total.
---
# `canary-deployment-validation-pro`
Testando em produção com risco minimizado.
## Regras
1. Direcione inicialmente apenas 1% ou 5% do tráfego real para a "Canary instance".
2. Compare as métricas de performance e erro entre a versão estável e a versão Canary em tempo real.
3. Automatize o aumento gradual (Step-up) do tráfego se a versão Canary demonstrar estabilidade.
---
