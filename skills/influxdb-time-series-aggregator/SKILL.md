---
name: influxdb-time-series-aggregator
description: Agrega e gerencia dados de séries temporais no InfluxDB para telemetria e monitoramento de IoT.
---
# `influxdb-time-series-aggregator`
Precisão temporal para métricas e sensores.
## Regras
1. Utilize Tags para metadados de baixa cardinalidade (ex: sensor_id).
2. Utilize Fields para valores de alta cardinalidade que mudam constantemente.
3. Configure `Retention Policies` para limpar dados antigos e reduzir o uso de disco.
