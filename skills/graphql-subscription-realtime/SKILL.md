---
name: graphql-subscription-realtime
description: Implementa atualizações em tempo real usando GraphQL Subscriptions sobre WebSockets para reatividade instantânea na UI.
---
# `graphql-subscription-realtime`
Dados que fluem para a interface conforme acontecem no backend.
## Regras
1. Defina operações de `subscription` no Schema que representam eventos disparados por mutações (ex: `messageSent`).
2. Utilize um motor de Pub/Sub (Redis ou similar) para propagar eventos entre instâncias do servidor GraphQL.
3. Monitore o número de conexões ativas e garanta o fechamento adequado do socket em erros do cliente.
---
