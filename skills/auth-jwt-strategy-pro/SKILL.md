---
name: auth-jwt-strategy-pro
description: Gerencia autenticação baseada em JSON Web Tokens com rotação de chaves e Refresh Tokens.
---
# `auth-jwt-strategy-pro`
Sessões de usuário seguras e stateless.
## Regras
1. Utilize algoritmos fortes (RS256 ou superior).
2. Armazene o segredo em variáveis de ambiente seguras.
3. Implemente expiração curta para Access Tokens e longa para Refresh Tokens.
