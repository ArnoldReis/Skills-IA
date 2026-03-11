---
name: synthetic-monitoring-pro
description: Realiza testes de monitoramento proativo (canaries/probes) simulando o comportamento do usuário para detectar falhas antes deles.
---
# `synthetic-monitoring-pro`
Sentinelas automáticas que testam seu sistema continuamente.
## Regras
1. Crie scripts que realizam os fluxos críticos (ex: Login, Adicionar ao Carrinho) em intervalos regulares (ex: a cada 1 min).
2. Execute esses testes a partir de diferentes regiões geográficas para medir a latência global.
3. Alerte imediatamente se o teste sintético falhar, mesmo que os monitores de infraestrutura pareçam saudáveis.
---
