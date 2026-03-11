---
name: environment-parity-check-automation
description: Automatiza a verificação de paridade entre os ambientes de Dev, Staging e Produção para evitar o "funciona na minha máquina".
---
# `environment-parity-check-automation`
Garantindo que todos os ambientes falem a mesma língua.
## Regras
1. Utilize o mesmo sistema operacional e versões de software em todos os ambientes através do Docker.
2. Garanta que as configurações (variáveis de ambiente) sigam o mesmo padrão, variando apenas os valores/segredos.
3. Utilize volumes idênticos de dados (mascarados) em Staging para simular a carga real de produção.
---
