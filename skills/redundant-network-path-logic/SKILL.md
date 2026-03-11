---
name: redundant-network-path-logic
description: Define lógicas para utilizar caminhos de rede redundantes, garantindo que a comunicação continue mesmo se um link ou rota falhar.
---
# `redundant-network-path-logic`
Conectividade resiliente através da redundância de rotas.
## Regras
1. Configure múltiplos endereços de saída ou gateways em modo de alta disponibilidade.
2. Utilize protocolos de roteamento dinâmico que possam detectar falhas de link e mudar a rota em tempo real.
3. Monitore a saúde de cada caminho de rede de forma independente para evitar rotear tráfego para links degradados.
---
