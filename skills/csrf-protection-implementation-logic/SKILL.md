---
name: csrf-protection-implementation-logic
description: Implementa proteções contra Cross-Site Request Forgery (CSRF) para proteger ações críticas de usuários autenticados via Cookies.
---
# `csrf-protection-implementation-logic`
Garantindo que cada comando venha realmente do seu frontend.
## Regras
1. Utilize tokens anti-CSRF únicos por sessão ou por requisição em todos os formulários e chamadas de mutação (POST/PUT/DELETE).
2. Configure seus cookies de sessão com o atributo `SameSite=Strict` ou `Lax` para segurança adicional.
3. Verifique o header `Origin` ou `Referer` em todas as requisições de escrita.
---
