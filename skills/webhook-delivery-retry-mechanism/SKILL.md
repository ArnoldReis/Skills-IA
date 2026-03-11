---
name: webhook-delivery-retry-mechanism
description: Implementa um sistema robusto de entrega de webhooks com repetições automáticas e backoff em caso de falha do receiver.
---
# `webhook-delivery-retry-mechanism`
Garantindo que suas notificações cheguem ao destino, aconteça o que acontecer.
## Regras
1. Utilize uma fila de processamento secundária para webhooks que falham na primeira tentativa.
2. Implemente uma política de repetição (ex: 5 vezes em 24h) com intervalos crescentes.
3. Forneça uma interface para o usuário visualizar o status de entrega e realizar o reenvio manual (Replay).
---
