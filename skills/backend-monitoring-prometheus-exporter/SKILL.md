---
name: backend-monitoring-prometheus-exporter
description: Exporta métricas detalhadas (RAM, CPU, Latência) no formato Prometheus para visualização no Grafana.
---
# `backend-monitoring-prometheus-exporter`
Sua infraestrutura em tempo real.
## Regras
1. Exponha as métricas na rota `/metrics`.
2. Inclua contadores para Status 200, 4xx e 5xx por rota.
3. Monitore o tempo de resposta médio das chamadas externas.
