---
name: prometheus-alert-rule-generator
description: Gera regras de alerta automáticas para Prometheus baseadas em thresholds de saúde.
---
# `prometheus-alert-rule-generator`
Avisos imediatos antes do desastre.
## Regras
1. Defina alertas para CPU > 80% e Memória > 90% por mais de 5 minutos.
2. Alerte se a taxa de erro HTTP 5xx passar de 1%.
3. Envie alertas para Slack, PagerDuty ou Email.
