---
name: aws-api-gateway-custom-domain
description: Configura domínios customizados e certificados SSL (ACM) para APIs expostas via AWS API Gateway.
---
# `aws-api-gateway-custom-domain`
APIs com URLs profissionais e seguras.
## Regras
1. Utilize certificados emitidos via AWS Certificate Manager (ACM) na região correta.
2. Configure o mapeamento de base path para rotear para diferentes estágios (v1, prod).
3. Utilize políticas de segurança de TLS modernas (TLS 1.2+).
