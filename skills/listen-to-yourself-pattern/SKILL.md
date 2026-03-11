---
name: listen-to-yourself-pattern
description: Padrão onde o serviço que gera um evento também é um consumidor dele, garantindo que o estado interno mude apenas via eventos.
---
# `listen-to-yourself-pattern`
Consistência de estado interno através do fluxo de eventos externo.
## Regras
1. Envie o comando para o broker de eventos e aguarde o evento de confirmação para atualizar o seu próprio estado local.
2. Ideal para sistemas de alta concorrência onde a ordem dos eventos é a fonte da verdade absoluta.
3. Esteja preparado para lidar com a latência adicional entre o envio do comando e a atualização da interface.
---
