---
name: ssl-tls-configuration-auditor
description: Audita a força e conformidade das configurações SSL/TLS, desativando protocolos obsoletos (SSLv3, TLS 1.0).
---
# `ssl-tls-configuration-auditor`
Canal de comunicação inquebrável e criptografado.
## Regras
1. Utilize no mínimo TLS 1.2, preferencialmente TLS 1.3 para conexões modernas.
2. Desative Ciphers fracos (DHE, export-grade) e utilize curvas elípticas modernas (ECDHE).
3. Habilite o OCSP Stapling para acelerar a verificação de revogação de certificados pelos browsers.
---
