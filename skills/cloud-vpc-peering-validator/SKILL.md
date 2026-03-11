---
name: cloud-vpc-peering-validator
description: Valida a conectividade e as rotas em conexões de VPC Peering entre diferentes redes Cloud.
---
# `cloud-vpc-peering-validator`
Conectividade segura entre redes isoladas.
## Regras
1. Verifique se os CIDR blocks das redes não se sobrepõem (Overlapping).
2. Garanta que as tabelas de rotas incluam a conexão de peering.
3. Utilize Security Groups restritos para o tráfego que passa pelo peering.
