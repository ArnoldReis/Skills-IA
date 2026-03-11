---
name: aws-iam-least-privilege-auditor
description: Verifica permissões IAM da AWS seguindo o princípio do privilégio mínimo (Least Privilege).
---
# `aws-iam-least-privilege-auditor`
Redução da superfície de ataque no Cloud.
## Regras
1. Liste e sinalize políticas com `Action: "*"` em recursos críticos.
2. Identifique chaves de acesso (Access Keys) antigas ou não rotacionadas.
3. Sugira políticas baseadas em identidades (IAM Roles) em vez de usuários diretos.
