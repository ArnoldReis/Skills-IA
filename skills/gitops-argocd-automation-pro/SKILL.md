---
name: gitops-argocd-automation-pro
description: Implementa o padrão GitOps usando ArgoCD para garantir que o estado do cluster Kubernetes coincida sempre com o definido no Git.
---
# `gitops-argocd-automation-pro`
Sincronização contínua entre o seu repositório Git e o runtime.
## Regras
1. Mantenha toda a definição de infraestrutura (YAMLs, Helm Charts) em um repositório Git separado do código-fonte.
2. Utilize o "Automated Sync" para que o ArgoCD aplique as mudanças no cluster assim que houver um merge na branch principal.
3. Configure o "Self-healing" para reverter automaticamente alterações manuais (drift) feitas diretamente no cluster via kubectl.
---
