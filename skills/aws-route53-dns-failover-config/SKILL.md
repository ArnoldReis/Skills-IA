---
name: aws-route53-dns-failover-config
description: Configura roteamento DNS com failover automático no Route53 baseado em Health Checks.
---
# `aws-route53-dns-failover-config`
Sistemas sempre online via DNS inteligente.
## Regras
1. Configure Health Checks que verifiquem um endpoint `/health` real da aplicação.
2. Utilize o tipo de roteamento 'Failover' (Primary/Secondary).
3. Garanta que o TTL do registro seja baixo (ex: 60s) para convergência rápida.
