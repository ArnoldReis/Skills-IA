---
name: polling-vs-long-polling-strategy
description: Define critérios de escolha entre Polling simples e Long Polling baseado na necessidade de latência e consumo de recursos.
---
# `polling-vs-long-polling-strategy`
Escolhendo a forma certa de buscar atualizações quando o real-time puro não é viável.
## Regras
1. Polling Simples: Use para dados que mudam pouco e onde latência de segundos é aceitável (ex: status de job pesado).
2. Long Polling: Use para baixar a latência sem manter conexões persistentes complexas; o servidor "segura" a resposta até ter dado novo.
3. Evite Polling em intervalos muito curtos (< 1s) para não sobrecarregar o log e a CPU do servidor.
---
