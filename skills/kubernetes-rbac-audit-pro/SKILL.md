---
name: kubernetes-rbac-audit-pro
description: Audita permissões de RBAC no Kubernetes para identificar roles e clusterroles com privilégios excessivos.
---
# `kubernetes-rbac-audit-pro`
Controle de acesso granular e seguro no cluster.
## Regras
1. Identifique sujeitos (Users/ServiceAccounts) com permissão de `*` em recursos sensíveis.
2. Evite o uso extensivo de `cluster-admin` para aplicações de terceiros.
3. Utilize ferramentas como `rbac-lookup` ou `krane` para visualização.
