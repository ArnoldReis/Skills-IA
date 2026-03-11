---
name: backend-logging-winston-edge
description: Estrutura logs avançados e rastreáveis (JSON) usando a biblioteca Winston.
---
# `backend-logging-winston-edge`
Visibilidade total do que acontece no servidor.
## Regras
1. Logue em formato JSON em produção para fácil ingestão em sistemas como ELK ou Datadog.
2. Adicione `request_id` em todos os logs de uma mesma requisição.
3. Remova dados sensíveis antes de logar.
