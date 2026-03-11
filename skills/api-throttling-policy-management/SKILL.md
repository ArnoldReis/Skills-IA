---
name: api-throttling-policy-management
description: Gerencia políticas de estrangulamento (Throttling) para reduzir a velocidade de respostas em vez de bloqueá-las totalmente.
---
# `api-throttling-policy-management`
Suavizando picos de tráfego através da degradação graciosa da performance.
## Regras
1. Aplique Throttling quando o sistema estiver perto da capacidade máxima para preservar a estabilidade dos serviços críticos.
2. Diferencie entre tráfego interativo (usuários) e tráfego de background (bots/jobs) ao aplicar atrasos.
3. Comunique claramente ao cliente que a velocidade está sendo limitada através de headers específicos.
---
