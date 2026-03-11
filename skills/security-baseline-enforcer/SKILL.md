---
name: security-baseline-enforcer
description: Monitora e garante que todos os recursos da nuvem estejam em conformidade com o Security Baseline da empresa.
---
# `security-baseline-enforcer`
Garantia de conformidade contínua e imutável.
## Regras
1. Utilize o AWS Config ou Azure Policy para detectar e reverter automaticamente mudanças que violem o baseline.
2. Proíba a criação de usuários IAM sem MFA (Multi-Factor Authentication) habilitado.
3. Garanta que todos os logs de auditoria estejam sendo expedidos para o bucket central de logs da segurança.
---
