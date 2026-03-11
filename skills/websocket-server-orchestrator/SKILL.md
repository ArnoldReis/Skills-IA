---
name: websocket-server-orchestrator
description: Gerencia conexões persistentes bidirecionais (Real-time) usando WebSockets de forma escalável.
---
# `websocket-server-orchestrator`
Interatividade instantânea e atualizações ao vivo.
## Regras
1. Utilize o padrão de Pub/Sub (ex: Redis) para enviar mensagens em múltiplos servidores.
2. Implemente Heartbeats (Ping/Pong) para detectar conexões mortas.
3. Autentique o usuário durante o handshake inicial.
