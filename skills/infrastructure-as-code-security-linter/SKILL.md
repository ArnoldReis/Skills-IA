---
name: infrastructure-as-code-security-linter
description: Analisa arquivos IaC (Terraform, CloudFormation) em busca de recursos mal configurados ou inseguros.
---
# `infrastructure-as-code-security-linter`
Detecção precoce de brechas de segurança na infraestrutura.
## Regras
1. Identifique buckets S3 públicos, grupos de segurança abertos demais (0.0.0.0/0) e bancos sem criptografia.
2. Utilize Checkov ou tfsec no pipeline de CI para validar o HCL do Terraform.
3. Não ignore os "warnings"; pequenas falhas de infra costumam ser a porta de entrada para invasões.
---
