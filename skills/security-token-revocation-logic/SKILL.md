---
name: security-token-revocation-logic
description: Implementa mecanismos para invalidar instantaneamente tokens de acesso (JWT/OAuth) em caso de suspeita de fraude.
---
# `security-token-revocation-logic`
Retomada imediata do controle sobre sessões ativas.
## Regras
1. Utilize uma Blocklist no Redis para armazenar o `jti` (JWT ID) de tokens revogados antes da expiração original.
2. Implemente o conceito de "Session Versioning" para invalidar todos os tokens de um usuário simultaneamente.
3. Verifique a lista de revogação em todos os gateways de API antes de processar qualquer requisição autenticada.
---
