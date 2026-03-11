---
name: cloud-cdn-invalidation-tool
description: Invalida caches de CDNs (CloudFront, Akamai) programaticamente após atualizações de conteúdo.
---
# `cloud-cdn-invalidation-tool`
Conteúdo sempre atualizado para o usuário final.
## Regras
1. Invalide apenas os paths específicos alterados para reduzir custos e carga.
2. Utilize curingas (`*`) com cautela em distribuições grandes.
3. Monitore o status da invalidação para garantir que o conteúdo novo foi propagado.
