---
name: network-segmentation-logic-pro
description: Define lógicas de segmentação de rede (VPCs, Subnets, Security Groups) para isolar camadas da aplicação.
---
# `network-segmentation-logic-pro`
Confinamento de danos através da isolação de camadas.
## Regras
1. Mantenha o Banco de Dados em uma sub-rede privada, sem acesso direto à Internet.
2. Utilize Security Groups que permitam apenas o tráfego necessário (ex: Web -> App na porta 8080).
3. Implemente redes DMZ (Zona Desmilitarizada) para balanceadores de carga e proxies reversos públicos.
---
