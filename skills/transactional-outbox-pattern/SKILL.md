---
name: transactional-outbox-pattern
description: Implementa o padrão Outbox para garantir a consistência entre a alteração no banco de dados e o envio de eventos para o broker.
---
# `transactional-outbox-pattern`
Integridade atômica entre persistência e mensageria.
## Regras
1. Salve o evento em uma tabela de `Outbox` no mesmo banco de dados e na mesma transação da alteração de negócio.
2. Utilize um processo separado (Relayer) para ler a tabela de Outbox e publicar as mensagens no broker (Kafka/RabbitMQ).
3. Só remova ou marque a mensagem como enviada na Outbox após a confirmação de sucesso do broker (ACK).
---
