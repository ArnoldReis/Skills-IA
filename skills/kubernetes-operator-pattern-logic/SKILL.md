---
name: kubernetes-operator-pattern-logic
description: Implementa o padrão de Operadores para gerenciar aplicações complexas com estado (Stateful) de forma nativa no Kubernetes.
---
# `kubernetes-operator-pattern-logic`
Automatizando o conhecimento operacional dentro do próprio cluster.
## Regras
1. Utilize Custom Resource Definitions (CRDs) para estender a API do Kubernetes com conceitos específicos do seu domínio.
2. Implemente o "Reconciliation Loop" para garantir que o estado atual da aplicação siga sempre o estado desejado.
3. Utilize o Operator SDK ou Kubebuilder para acelerar o desenvolvimento e seguir as melhores práticas da comunidade.
---
