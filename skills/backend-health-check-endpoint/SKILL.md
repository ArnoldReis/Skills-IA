---
name: backend-health-check-endpoint
description: Fornece endpoints de monitoramento (Liveness/Readiness) para orquestradores como Kubernetes ou Docker.
---
# `backend-health-check-endpoint`
O pulso do seu servidor.
## Regras
1. Verifique conectividade com dependências críticas (Banco de Dados, Redis).
2. Retorne Status 200 se estiver saudável e 503 se houver falha de infraestrutura.
3. Responda rapidamente para não sobrecarregar o orquestrador.
