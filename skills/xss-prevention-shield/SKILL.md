---
name: xss-prevention-shield
description: Implementa defesas contra Cross-Site Scripting (XSS), sanitizando inputs e escapando saídas de dados.
---
# `xss-prevention-shield`
Proteção do navegador do usuário contra scripts maliciosos.
## Regras
1. SEMPRE escape dados dinâmicos antes de renderizá-los no HTML.
2. Utilize bibliotecas como DOMPurify para sanitizar HTML vindo de usuários.
3. Utilize Content Security Policy (CSP) como uma camada de defesa profunda.
---
