---
name: infrastructure-drift-detector
description: Identifica discrepâncias (Drift) entre o código IaC (Terraform/CloudFormation) e a infraestrutura real.
---
# `infrastructure-drift-detector`
Garantia de que o código reflete a realidade da nuvem.
## Regras
1. Execute `terraform plan` regularmente para detectar mudanças feitas manualmente via console.
2. Alerte via Slack ou PagerDuty quando um drift importante for detectado.
3. Utilize ferramentas como Driftctl para uma análise profunda e multicloud.
