---
name: database-replication-lag-monitor
description: Monitora o atraso de sincronização (Lag) entre o banco principal e as réplicas de leitura para evitar a entrega de dados obsoletos.
---
# `database-replication-lag-monitor`
Visibilidade sobre a consistência eventual do seu cluster de dados.
## Regras
1. Monitore continuamente a diferença de tempo (em segundos) ou de logs (em bytes) entre o Master e o Slave.
2. Alerte se o atraso de replicação exceder o limite aceitável para a regra de negócio (ex: > 5 segundos).
3. Configure balanceadores de carga para desviar o tráfego de réplicas que estejam muito atrasadas.
---
