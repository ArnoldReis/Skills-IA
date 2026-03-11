---
name: gcp-pubsub-subscription-monitor
description: Monitora latência, taxas de erro e mensagens pendentes em assinaturas Pub/Sub do Google Cloud.
---
# `gcp-pubsub-subscription-monitor`
Visibilidade total sobre o fluxo de mensagens no GCP.
## Regras
1. Monitore o `num_undelivered_messages` para identificar lentidão nos consumidores.
2. Alerte se a idade da mensagem mais antiga (Age of oldest message) passar de um limite.
3. Verifique se o acknowledge (ACK) está sendo enviado corretamente.
