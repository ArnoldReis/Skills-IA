---
name: security-jwt-best-practices
description: Implementa padrões seguros de JSON Web Token (JWT), incluindo rotação de chaves, expiração curta e refresh tokens.
---
# `security-jwt-best-practices`
Autenticação stateless, segura e escalável.
## Regras
1. Utilize algoritmos de assinatura fortes (ex: RS256 ou EdDSA) em vez de HS256 se possível.
2. Mantenha o Access Token com tempo de vida curto (ex: 15 min) e utilize Refresh Tokens para renovação.
3. NUNCA armazene senhas ou dados sensíveis no Payload do JWT (ele é apenas codificado, não criptografado por padrão).
---
