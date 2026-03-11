---
name: jwt-security-best-practices-pro
description: Implementa padrões de segurança para JSON Web Tokens (JWT), incluindo assinatura forte, expiração curta e rotação de chaves.
---
# `jwt-security-best-practices-pro`
Protegendo a identidade e autorização em sistemas apátridas.
## Regras
1. Utilize algoritmos de assinatura assimétrica (ex: RS256 ou EdDSA) para que apenas o emissor possa assinar tokens.
2. Mantenha o tempo de expiração (`exp`) o mais curto possível e utilize Refresh Tokens para renovação.
3. Não armazene dados sensíveis (senhas, PII) no payload do JWT, pois ele pode ser lido por qualquer pessoa.
---
