---
name: terraform-state-locking-s3
description: Configura o backend remoto do Terraform com S3 e DynamoDB para evitar corrupção de estado.
---
# `terraform-state-locking-s3`
Colaboração segura em infraestrutura compartilhada.
## Regras
1. Utilize um bucket S3 com versionamento habilitado para o estado.
2. Utilize uma tabela DynamoDB para o mecanismo de Lock.
3. Nunca commite o arquivo `.tfstate` local no repositório.
