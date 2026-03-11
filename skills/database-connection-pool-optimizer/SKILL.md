---
name: database-connection-pool-optimizer
description: Gerencia e otimiza o pool de conexões com o banco de dados para evitar exaustão de recursos.
---
# `database-connection-pool-optimizer`
Eficiência máxima no uso de conexões SQL.
## Regras
1. Configure o número máximo de conexões baseado na capacidade do hardware.
2. Utilize `idleTimeout` para fechar conexões inativas.
3. Monitore o tempo de espera por conexão disponível no pool.
