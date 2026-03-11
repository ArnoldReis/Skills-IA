---
name: aws-rds-aurora-failover-tester
description: Testa e valida a resiliência de bancos de dados RDS Aurora através de simulação de failover.
---
# `aws-rds-aurora-failover-tester`
Disponibilidade contínua de dados em situações críticas.
## Regras
1. Execute o failover em horários de baixa carga para validar o tempo de propagação do DNS.
2. Certifique-se de que a aplicação possui lógica de reconexão automática.
3. Utilize réplicas de leitura em múltiplas AZs (Availability Zones).
