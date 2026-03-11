---
name: content-security-policy-csp-pro
description: Define diretivas de Content Security Policy (CSP) para mitigar XSS e injeção de dados, restringindo fontes de recursos.
---
# `content-security-policy-csp-pro`
A lista branca definitiva de recursos para seu frontend.
## Regras
1. Inicie com `default-src 'none'` e habilite apenas o que for estritamente necessário.
2. Evite `unsafe-inline` e `unsafe-eval` se possível; utilize hashes ou nonces para scripts inline.
3. Restrinja `frame-ancestors` para evitar ataques de Clickjacking.
---
