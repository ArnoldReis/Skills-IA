---
name: kubernetes-node-affinity-manager
description: Controla o agendamento de pods em nós específicos baseado em labels e afinidade (Node Affinity).
---
# `kubernetes-node-affinity-manager`
Otimização física de recursos no cluster.
## Regras
1. Utilize afinidade para colocar pods que conversam muito no mesmo Rack/Zona.
2. Utilize Taints e Tolerations para isolar cargas sensíveis ou que requerem GPUs.
3. Utilize afinidade suave (`preferredDuringScheduling`) para permitir escala mesmo sem nós ideais.
