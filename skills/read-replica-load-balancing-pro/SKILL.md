---
name: read-replica-load-balancing-pro
description: Distribui o tráfego de leitura entre réplicas de banco de dados para aliviar o banco principal e reduzir latência.
---
# `read-replica-load-balancing-pro`
Aumentando a capacidade de leitura através da paralelização.
## Regras
1. Direcione todas as operações de escrita (INSERT/UPDATE/DELETE) exclusivamente para o banco Master.
2. Utilize réplicas de leitura para SELECTs escaláveis e relatórios custosos.
3. Esteja ciente do "Replication Lag": uma leitura em uma réplica pode retornar dados ligeiramente desatualizados.
---
