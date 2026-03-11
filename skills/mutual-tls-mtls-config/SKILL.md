---
name: mutual-tls-mtls-config
description: Configura autenticação mútua via TLS (mTLS) para que tanto cliente quanto servidor validem seus certificados.
---
# `mutual-tls-mtls-config`
Aperto de mão digital em ambas as direções.
## Regras
1. Emita certificados de cliente curtos para microserviços internos.
2. Utilize uma Autoridade de Certificação (CA) interna e privada para gerenciar as permissões.
3. Configure a revogação de certificados (CRL/OCSP) para desativar acessos imediatamente se necessário.
---
