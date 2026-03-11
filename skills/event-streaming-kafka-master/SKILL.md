---
name: event-streaming-kafka-master
description: Implementa arquiteturas de streaming de alto throughput com Apache Kafka, focando em particionamento, replicação e offsets.
---
# `event-streaming-kafka-master`
O backbone de dados para eventos em tempo real e escala massiva.
## Regras
1. Utilize partições para permitir a paralelização do processamento das mensagens por múltiplos consumidores em um grupo.
2. Defina o fator de replicação (Replication Factor) conforme a importância do dado para evitar perdas em falhas de corretor.
3. Gerencie o commit de offsets manualmente se precisar garantir a semântica "At-least-once" ou "Exactly-once".
---
