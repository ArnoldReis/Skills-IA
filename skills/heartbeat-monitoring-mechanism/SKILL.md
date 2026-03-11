---
name: heartbeat-monitoring-mechanism
description: Implementa sinais de vida (Heartbeats) para processos que não possuem endpoints HTTP, detectando paradas de jobs ou workers.
---
# `heartbeat-monitoring-mechanism`
Monitoramento de processos "silenciosos" baseados em eventos.
## Regras
1. Faça com que o worker envie um sinal "Ainda estou vivo" para um sistema central a cada X segundos.
2. Configure um alerta do tipo "Ausência de Evento" (Dead Man's Switch) que dispara se o sinal parar de chegar.
3. Inclua metadados do progresso do job no payload do heartbeat para monitorar se o worker está travado em um loop.
---
