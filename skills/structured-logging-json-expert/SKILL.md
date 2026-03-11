---
name: structured-logging-json-expert
description: Implementa logs em formato JSON estruturado para facilitar a pesquisa, filtragem e análise automatizada.
---
# `structured-logging-json-expert`
Logs feitos para máquinas e aproveitados por humanos.
## Regras
1. Nunca logue mensagens puramente textuais sem contexto; utilize pares chave-valor.
2. Inclua o `correlation-id` em todos os logs para permitir o rastreamento de uma transação entre diferentes serviços.
3. Garanta que o esquema dos campos de log seja consistente em toda a organização para cruzamento de dados eficiente.
---
