---
name: log-aggregation-strategy-pro
description: Define estratégias para centralizar logs de múltiplos containers e máquinas em um único repositório pesquisável.
---
# `log-aggregation-strategy-pro`
Busca centralizada e rápida em montanhas de logs.
## Regras
1. Utilize agentes de transporte (como Fluent Bit ou Logstash) para enviar logs para o cluster central (Elasticsearch/Loki).
2. Garanta que cada linha de log contenha o timestamp em formato ISO8601 e o ID da instância.
3. Implemente políticas de rotação para evitar que o armazenamento de logs esgote o espaço em disco da infraestrutura.
---
