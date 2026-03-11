---
name: backend-notification-queue-pro
description: Gerencia o envio de notificações (Push, Email, SMS) através de filas para garantir entrega e retentativas.
---
# `backend-notification-queue-pro`
Comunicação garantida com o cliente final.
## Regras
1. Envie notificações em background para não travar a UI do usuário.
2. Agrupe notificações similares (Batching) para economizar recursos.
3. Registre o status de entrega e erros de provedores externos.
