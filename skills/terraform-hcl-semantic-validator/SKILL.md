---
name: terraform-hcl-semantic-validator
description: Valida a semântica e as melhores práticas de arquivos HCL (Terraform) antes do deploy.
---
# `terraform-hcl-semantic-validator`
Infraestrutura como Código segura e padronizada.
## Regras
1. Execute `terraform validate` para erros de sintaxe.
2. Utilize TFLint para detectar padrões de provedores (ex: tipos de instância caros).
3. Garanta que todas as Tags obrigatórias estejam presentes nos recursos.
