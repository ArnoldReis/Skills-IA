---
name: clickhouse-olap-query-helper
description: Constrói consultas OLAP de alta performance no Clickhouse para análises em tempo real de big data.
---
# `clickhouse-olap-query-helper`
Velocidade absurda em análises de bilhões de linhas.
## Regras
1. Utilize o motor `MergeTree` para a maioria das tabelas de eventos.
2. Pense em colunas, não em linhas; filtre apenas as colunas necessárias para reduzir o I/O.
3. Utilize amostragem (`SAMPLE`) para estimativas ultra-rápidas em datasets massivos.
