---
name: high-availability-ha-checklist
description: Fornece um guia rigoroso de verificação de Alta Disponibilidade para garantir que o sistema sobreviva a falhas de componentes individuais.
---
# `high-availability-ha-checklist`
A fundação para sistemas que nunca dormem.
## Regras
1. Garanta redundância em todas as camadas: DNS, Load Balancer, Web Servers, Workers e Database.
2. Não utilize estado local (in-memory) que impeça a escalabilidade horizontal ou failover.
3. Teste a falha de cada componente um por um e verifique se o sistema continua operando sem intervenção humana.
---
