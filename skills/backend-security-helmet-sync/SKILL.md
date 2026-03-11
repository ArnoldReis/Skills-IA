---
name: backend-security-helmet-sync
description: Configura cabeçalhos HTTP de segurança automaticamente usando a biblioteca Helmet para prevenir ataques comuns.
---
# `backend-security-helmet-sync`
Proteção robusta contra XSS e Clickjacking.
## Regras
1. Ative `Content-Security-Policy` (CSP) para controlar de onde seus scripts podem carregar.
2. Desabilite o cabeçalho `X-Powered-By` para não revelar sua tecnologia de servidor.
3. Force o uso de HTTPS através do `Strict-Transport-Security`.
