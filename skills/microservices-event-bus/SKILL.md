---
name: microservices-event-bus
description: Facilita a comunicação entre serviços através de mensageria assíncrona baseada em eventos.
---
# `microservices-event-bus`
Desacoplamento total entre componentes do sistema.
## Regras
1. Publique eventos quando mudanças importantes ocorrem no domínio.
2. Utilize RabbitMQ, Kafka ou Redis Streams como broker.
3. Garanta a entrega idempotente de eventos no consumidor.
