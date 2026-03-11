---
name: event-driven-architecture-master
description: Projeta sistemas baseados em eventos para garantir escalabilidade e desacoplamento total entre produtores e consumidores.
---
# `event-driven-architecture-master`
Fluxo contínuo de dados e reações em tempo real.
## Regras
1. Utilize o padrão "Outbox" para garantir que eventos sejam enviados apenas se a transação do banco for concluída.
2. Dimensione eventos de forma densa em dados (Fat Events) para evitar que o consumidor precise consultar o produtor de volta.
3. Monitore o atraso dos consumidores (Consumer Lag) para garantir que o sistema processe tudo no tempo esperado.
---
