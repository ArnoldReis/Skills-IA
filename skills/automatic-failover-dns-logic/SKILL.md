---
name: automatic-failover-dns-logic
description: Implementa a troca automática de registros DNS para apontar para servidores de backup quando o primário falha.
---
# `automatic-failover-dns-logic`
Redirecionamento global de tráfego em nível de rede DNS.
## Regras
1. Configure verificações de saúde (Health Checks) no provedor de DNS que monitorem seus endpoints principais.
2. Utilize registros CNAME ou IPs flutuantes com tempos de TTL curtos para garantir propagação rápida da troca.
3. Implemente políticas de failover geográfico para direcionar usuários para o data center mais próximo e saudável.
---
