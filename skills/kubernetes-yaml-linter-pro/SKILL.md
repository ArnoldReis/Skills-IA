---
name: kubernetes-yaml-linter-pro
description: Analisa manifestos Kubernetes em busca de erros de configuração, segurança e limites de recursos.
---
# `kubernetes-yaml-linter-pro`
Clusters estáveis e recursos bem dimensionados.
## Regras
1. Verifique se `resources.limits` e `resources.requests` estão definidos.
2. Detecte o uso de imagens com tag `latest` (má prática).
3. Valide se existem Liveness e Readiness probes configurados.
