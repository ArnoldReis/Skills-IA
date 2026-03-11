---
name: redis-stream-event-consumer
description: Implementa consumidores de alta performance para Streams do Redis, garantindo processamento 'at-least-once'.
---
# `redis-stream-event-consumer`
Mensageria ultra-rápida e resiliente.
## Regras
1. Utilize Grupos de Consumidores (Consumer Groups) para distribuir a carga.
2. Não esqueça de enviar o `XACK` após o processamento bem-sucedido.
3. Monitore o PEL (Pending Entires List) para detectar mensagens travadas.
