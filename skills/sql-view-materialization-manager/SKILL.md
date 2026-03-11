---
name: sql-view-materialization-manager
description: Gerencia e atualiza visões materializadas (Materialized Views) para relatórios rápidos e dashboards de alta performance.
---
# `sql-view-materialization-manager`
Dados agregados pré-processados e instantâneos.
## Regras
1. Utilize `REFRESH MATERIALIZED VIEW` fora dos horários de pico.
2. Habilite o refresh concorrente (`CONCURRENTLY`) para evitar bloqueios de leitura durante a atualização.
3. Monitore a "idate" da visão para saber quão obsoleto está o dado exibido.
