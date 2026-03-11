---
name: vault-secrets-sync-orchestrator
description: Sincroniza segredos de forma segura entre o HashiCorp Vault e ambientes de execução (K8s, Env Vars).
---
# `vault-secrets-sync-orchestrator`
Gestão centralizada e rotativa de segredos.
## Regras
1. Nunca injete segredos em texto puro no repositório Git.
2. Utilize o Vault Agent para injetar segredos dinamicamente em arquivos ou pods.
3. Implemente a rotação automática de chaves de API e senhas de banco.
