---
name: streaming-api-implementation-logic
description: Implementa APIs que retornam fluxos de dados (Streams) de longa duração, ideais para LLMs, logs ou processamento massivo.
---
# `streaming-api-implementation-logic`
Entregando dados em pedaços conforme eles são produzidos.
## Regras
1. Utilize streams nativos do Node.js ou Streams de Resposta HTTP/Fetch para processar o dado sem ler tudo na memória.
2. Implemente mecanismos de cancelamento (AbortSignal) para interromper o processamento no backend se o cliente fechar a conexão.
3. Monitore o "time to first byte" (TTFB); o streaming deve começar a responder quase instantaneamente.
---
