---
name: database-failover-handling-pro
description: Implementa lógica de resiliência para lidar com falhas de banco de dados e transição automática para réplicas (Failover).
---
# `database-failover-handling-pro`
Alta disponibilidade e continuidade de serviço.
## Regras
1. Utilize strings de conexão que suportem múltiplos hosts (ex: Multi-host connection strings).
2. Implemente Circuit Breakers para evitar o "Thundering Herd" quando o banco principal cai.
3. Distinga erros de rede temporários de erros permanentes de autorização/sintaxe.
---
