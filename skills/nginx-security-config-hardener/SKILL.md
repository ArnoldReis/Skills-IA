---
name: nginx-security-config-hardener
description: Otimiza e endurece as configurações do Nginx para máxima segurança e performance (SSL/TLS).
---
# `nginx-security-config-hardener`
Servidor web blindado contra ataques modernos.
## Regras
1. Utilize cifras TLS 1.3 e desabilite versões antigas e vulneráveis (SSLv3/TLS 1.1).
2. Configure cabeçalhos de segurança (Strict-Transport-Security, X-Frame-Options).
3. Limite o tamanho do body da requisição (`client_max_body_size`) para evitar DoS.
