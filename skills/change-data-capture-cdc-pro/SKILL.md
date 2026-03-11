---
name: change-data-capture-cdc-pro
description: Implementa padrões de Change Data Capture (CDC) para sincronizar mudanças no banco de dados com outros sistemas em tempo real.
---
# `change-data-capture-cdc-pro`
Sincronização reativa de dados em tempo real.
## Regras
1. Utilize o log de transações do banco (ex: Binlog, WAL) em vez de triggers de aplicação.
2. Utilize ferramentas como Debezium para converter mudanças em streams de eventos (Kafka/Redis).
3. Garanta que a entrega dos eventos seja idempotente para evitar duplicação de dados.
