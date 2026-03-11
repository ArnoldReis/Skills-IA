---
name: health-check-implementation-expert
description: Implementa verificações de saúde profundas (Liveness, Readiness) para orquestradores de containers.
---
# `health-check-implementation-expert`
Autodiagnóstico preciso para a resiliência do cluster.
## Regras
1. Distinga entre `Liveness` (o serviço está vivo?) e `Readiness` (o serviço está pronto para receber tráfego?).
2. No Readiness Check, verifique as dependências críticas (Banco, Redis) antes de se declarar pronto.
3. Não sobrecarregue o sistema com verificações de saúde pesadas demais; seja rápido e direto.
---
