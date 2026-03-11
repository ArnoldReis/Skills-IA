---
name: redis-cluster-topology-manager
description: Gerencia e escala topologias de Cluster Redis para alta disponibilidade e sharding.
---
# `redis-cluster-topology-manager`
Performance e escala horizontal para dados em memória.
## Regras
1. Utilize pelo menos 3 nós masters e 3 slaves para garantir tolerância a falhas.
2. Monitore o uso de memória e faça o rehash de slots quando necessário.
3. Utilize Sentinel para failover automático se não estiver em modo Cluster.
