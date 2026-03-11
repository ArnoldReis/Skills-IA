---
name: redundant-load-balancer-config
description: Configura Alta Disponibilidade (HA) para o nível de balanceador de carga, eliminando o único ponto de falha no topo da rede.
---
# `redundant-load-balancer-config`
Sempre disponível, do IP à aplicação.
## Regras
1. Utilize um par de balanceadores em modo Active-Passive ou Active-Active com o protocolo VRRP ou IP flutuante.
2. Garanta que o estado das sessões (se houver) seja sincronizado entre os balanceadores.
3. Monitore a saúde do balanceador vizinho e tome o IP em milissegundos caso ele falhe.
---
