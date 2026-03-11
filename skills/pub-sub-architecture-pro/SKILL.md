---
name: pub-sub-architecture-pro
description: Implementa o padrão Publish-Subscribe para desacoplar produtores de eventos de múltiplos consumidores interessados.
---
# `pub-sub-architecture-pro`
Difundindo informações sem acoplamento entre serviços.
## Regras
1. Garanta que o publicador não precise conhecer a existência ou o número de assinantes (Subscribers).
2. Utilize tópicos categóricos bem definidos para que os assinantes possam filtrar apenas o que lhes interessa.
3. Lide com a eventual consistência, sabendo que diferentes assinantes podem processar em tempos diferentes.
---
