---
name: csrf-protection-logic
description: Implementa proteções contra Cross-Site Request Forgery (CSRF) usando tokens sincronizados e SameSite cookies.
---
# `csrf-protection-logic`
Impedindo que sites terceiros enviem comandos em nome do usuário.
## Regras
1. Utilize cookies com atributo `SameSite=Lax` ou `Strict`.
2. Inclua um Token anti-CSRF em todas as requisições de alteração de estado (POST, PUT, DELETE).
3. Valide o Header `Referer` ou `Origin` em requisições sensíveis.
---
