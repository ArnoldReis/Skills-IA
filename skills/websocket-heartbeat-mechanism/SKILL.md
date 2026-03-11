---
name: websocket-heartbeat-mechanism
description: Implementa o mecanismo de Heartbeat (Ping/Pong) para detectar conexões WebSockets mortas e manter túneis ativos em proxys.
---
# `websocket-heartbeat-mechanism`
Garantindo que a linha de comunicação em tempo real permaneça viva.
## Regras
1. Envie pacotes de "Ping" periódicos do servidor para o cliente em intervalos fixos (ex: a cada 30s).
2. Encerre a conexão se um "Pong" correspondente não for recebido dentro de um timeout definido.
3. Utilize este mecanismo para atravessar load balancers agressivos que derrubam conexões ociosas prematuramente.
---
