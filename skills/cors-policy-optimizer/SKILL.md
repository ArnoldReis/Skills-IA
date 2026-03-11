---
name: cors-policy-optimizer
description: Configura políticas de Cross-Origin Resource Sharing (CORS) seguras, restringindo origens e métodos permitidos.
---
# `cors-policy-optimizer`
Controle de acesso entre origens web.
## Regras
1. Evite utilizar `Access-Control-Allow-Origin: *` em APIs que lidam com dados privados.
2. Liste explicitamente os domínios permitidos em uma Whitelist.
3. Configure o `Access-Control-Max-Age` para reduzir o número de requisições OPTIONS (Preflight).
---
