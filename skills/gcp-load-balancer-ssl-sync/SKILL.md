---
name: gcp-load-balancer-ssl-sync
description: Gerencia e sincroniza certificados SSL gerenciados pelo Google para Load Balancers no GCP.
---
# `gcp-load-balancer-ssl-sync`
SSL automatizado e transparente no Google Cloud.
## Regras
1. Utilize certificados gerenciados pelo Google para evitar renovações manuais.
2. Certifique-se de que o registro DNS aponta corretamente para o IP do LB para validação.
3. Monitore o status 'ACTIVE' do certificado antes de redirecionar tráfego.
