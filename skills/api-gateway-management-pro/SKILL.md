---
name: api-gateway-management-pro
description: Orquestra o ponto central de entrada da API, lidando com roteamento, auth e transformação de protocolos.
---
# `api-gateway-management-pro`
Porta de entrada inteligente e segura para seu ecossistema.
## Regras
1. Utilize o Gateway para agregar múltiplas chamadas de microserviços em uma única resposta para o cliente (BFF pattern).
2. Implemente cache de borda (Edge Cache) para endpoints de leitura que não mudam com frequência.
3. Centralize a autenticação e autorização no Gateway para reduzir a carga nos serviços de backend.
---
