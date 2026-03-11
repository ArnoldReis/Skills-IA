---
name: metrics-monitoring-prometheus
description: Implementa a exportação de métricas no formato do Prometheus para monitorar saúde e performance em tempo real.
---
# `metrics-monitoring-prometheus`
Monitoramento de performance baseado em séries temporais.
## Regras
1. Exponha o endpoint `/metrics` em todos os serviços utilizando o formato de texto do Prometheus.
2. Utilize `Counters` para valores que apenas crescem (ex: total de requisições) e `Gauges` para valores instantâneos (ex: uso de CPU).
3. Utilize `Histograms` para medir a latência das requisições e calcular percentis (p95, p99).
---
