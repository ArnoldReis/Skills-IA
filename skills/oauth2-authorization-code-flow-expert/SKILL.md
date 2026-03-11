---
name: oauth2-authorization-code-flow-expert
description: Implementa o fluxo de Authorization Code com PKCE para garantir logins seguros em aplicações web e mobile.
---
# `oauth2-authorization-code-flow-expert`
O padrão ouro para delegação de acesso moderno.
## Regras
1. Utilize obrigatoriamente PKCE (Proof Key for Code Exchange) para prevenir ataques de interceptação de código.
2. Valide rigorosamente as URLs de redirecionamento (`redirect_uri`) para evitar ataques de redirecionamento aberto.
3. Certifique-se de que a troca do `code` pelo `access_token` ocorra sempre em um canal seguro (Back-channel).
---
