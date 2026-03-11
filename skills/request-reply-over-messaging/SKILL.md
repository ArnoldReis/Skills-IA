---
name: request-reply-over-messaging
description: Implementa o padrão Request-Reply usando filas de mensagens, permitindo comunicação síncrona simulada sobre infraestrutura assíncrona.
---
# `request-reply-over-messaging`
Comunicação "pergunta e resposta" sobre canais assíncronos.
## Regras
1. O produtor deve incluir o `Reply-To` (nome da fila de resposta) e um `Correlation-ID` único na mensagem original.
2. O consumidor processa a mensagem e envia a resposta para a fila especificada, mantendo o mesmo Correlation-ID.
3. O produtor aguarda (com timeout) na fila de resposta pela mensagem que contenha o Correlation-ID esperado.
---
