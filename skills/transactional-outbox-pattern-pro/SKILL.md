---
name: transactional-outbox-pattern-pro
description: Garante a consistência entre o banco de dados e o sistema de mensageria salvando eventos na mesma transação dos dados.
---
# `transactional-outbox-pattern-pro`
Envio atômico de dados e eventos para sistemas distribuídos.
## Regras
1. Salve o evento em uma tabela de "Outbox" dentro do mesmo banco de dados e transação da entidade principal.
2. Utilize um processo separado (Relay) para ler novos eventos da tabela Outbox e publicá-los no Message Broker (Kafka/RabbitMQ).
3. Marque os eventos como "Processados" apenas após a confirmação de recebimento (ACK) do broker.
---
