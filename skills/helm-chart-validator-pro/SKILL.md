---
name: helm-chart-validator-pro
description: Valida a estrutura e os valores de Helm Charts para deploys Kubernetes consistentes.
---
# `helm-chart-validator-pro`
Pacotes Kubernetes sem erros de configuração.
## Regras
1. Execute `helm lint` para validar a sintaxe do chart.
2. Verifique se os `values.yaml` seguem o schema definido.
3. Teste a renderização de templates com `helm template` antes de instalar.
