---
name: server-sent-events-sse-logic
description: Implementa fluxos de dados unidirecionais do servidor para o navegador usando o protocolo SSE, mais leve que WebSockets.
---
# `server-sent-events-sse-logic`
Stream de eventos unidirecional nativo e resiliente.
## Regras
1. Utilize o Content-Type `text/event-stream` e mantenha a resposta HTTP aberta por tempo indeterminado.
2. Formate as mensagens com prefixos `data:`, `id:` e `event:` conforme a especificação da W3C.
3. Aproveite a reconexão automática nativa dos navegadores se o link de SSE cair temporariamente.
---
