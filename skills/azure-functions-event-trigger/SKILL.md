---
name: azure-functions-event-trigger
description: Gerencia disparadores de eventos (Event Grid, Service Bus) para Azure Functions em arquiteturas orientadas a eventos.
---
# `azure-functions-event-trigger`
Reatividade total no Azure.
## Regras
1. Utilize o Service Bus para filas de mensagens resilientes.
2. Implemente o padrão de retry nativo da Azure para falhas temporárias.
3. Garanta que o payload da mensagem seja validado no início da Function.
