---
name: terraform-iac-module-expert
description: Desenvolve módulos de infraestrutura reutilizáveis e versionados usando Terraform para provisionamento multi-cloud.
---
# `terraform-iac-module-expert`
Infraestrutura como código modular, testável e escalável.
## Regras
1. Utilize o padrão de "Módulos" para encapsular recursos complexos (VPC, Clusters) e facilitar o reaproveitamento entre ambientes.
2. Mantenha o arquivo de estado (`terraform.tfstate`) em um backend remoto seguro (S3/GCS) com State Locking.
3. Valide as mudanças através do `terraform plan` antes de aplicá-las em qualquer ambiente de produção.
---
