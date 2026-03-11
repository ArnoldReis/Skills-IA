---
name: oauth2-flow-validator
description: Valida e orquestra fluxos de autenticação OAuth2 (Authorization Code, Client Credentials) com provedores externos.
---
# `oauth2-flow-validator`
Integração segura com provedores de identidade (IdP).
## Regras
1. Utilize o parâmetro `state` para prevenir ataques de CSRF durante a autenticação.
2. Utilize PKCE (Proof Key for Code Exchange) para aplicações móveis ou Single Page Apps.
3. Valide o `nonce` vindo do IdP para evitar ataques de replay.
---
