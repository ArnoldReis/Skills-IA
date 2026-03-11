---
name: security-header-audit
description: Audita e configura headers de resposta HTTP essenciais (HSTS, X-Content-Type, X-Frame-Options) para endurecimento do site.
---
# `security-header-audit`
Endurecimento de conexões HTTP através de headers.
## Regras
1. Habilite o `Strict-Transport-Security` (HSTS) para forçar HTTPS.
2. Utilize `X-Content-Type-Options: nosniff` para impedir que o browser adivinhe o tipo de arquivo.
3. Configure `Referrer-Policy` para controlar quanta informação de origem é enviada para outros sites.
---
