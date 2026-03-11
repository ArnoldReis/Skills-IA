---
name: circuit-breaker-messaging-expert
description: Aplica o padrão Circuit Breaker especificamente no contexto de envio de mensagens para brokers de instáveis.
---
# `circuit-breaker-messaging-expert`
Protegendo a aplicação contra a queda dos brokers de mensageria.
## Regras
1. Abra o circuito se a publicação no broker (Kafka/RabbitMQ) falhar n vezes consecutivas ou demorar demais.
2. No estado aberto, armazene temporariamente em um fallback (ex: local file ou DB secundário) ou rejeite o evento.
3. Teste o fechamento do circuito enviando volumes pequenos de mensagens de teste periodicamente.
---
