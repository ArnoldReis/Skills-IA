---
name: cloud-native-patterns-implementation
description: Implementa padrões nativos de nuvem (Sidecars, Ambassadors, Adapters) para melhorar a composição de sistemas.
---
# `cloud-native-patterns-implementation`
Arquiteturas otimizadas para a efemeridade e escala do Kubernetes.
## Regras
1. Utilize o padrão **Sidecar** para adicionar funcionalidades (logs, métricas, proxy) sem poluir o código principal.
2. Utilize o padrão **Ambassador** para simplificar o acesso a serviços externos (banco, APIs) através de um proxy local.
3. Utilize o padrão **Adapter** para normalizar a saída de logs e métricas de diferentes aplicações para um formato centralizado.
---
