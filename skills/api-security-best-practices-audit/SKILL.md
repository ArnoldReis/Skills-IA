---
name: api-security-best-practices-audit
description: Realiza uma auditoria focada especificamente em segurança de APIs, cobrindo autenticação, transporte e proteção de dados.
---
# `api-security-best-practices-audit`
A checklist de sobrevivência para sua fachada digital.
## Regras
1. Certifique-se de que a API utilize apenas HTTPS com suites de cifra modernas.
2. Valide que todos os endpoints de escrita (POST/PUT/DELETE) exijam autenticação forte.
3. Remova headers de servidor que revelem versões de software (ex: `X-Powered-By`, `Server`).
---
