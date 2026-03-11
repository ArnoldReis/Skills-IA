---
name: database-clustering-logic-pro
description: Implementa e gerência clusters de banco de dados para alta disponibilidade e tolerância a falhas.
---
# `database-clustering-logic-pro`
Resiliência de dados através da redundância coordenada.
## Regras
1. Utilize o conceito de nós Master e Réplicas; automatize o Failover caso o Master fique indisponível.
2. Monitore o Quorum para evitar o problema do "Split Brain" (dois masters ativos simultaneamente).
3. Garanta que as réplicas estejam em zonas de disponibilidade (Availability Zones) geograficamente distintas.
---
