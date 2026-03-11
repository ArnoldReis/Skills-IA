---
name: database-connection-pool-tuner
description: Otimiza e calibra o pool de conexões com o banco de dados para evitar sobrecarga e timeouts inesperados.
---
# `database-connection-pool-tuner`
Eficiência no uso de recursos de rede e banco.
## Regras
1. Defina um `max` de conexões baseado na capacidade do hardware do banco e número de instâncias da aplicação.
2. Utilize o `idleTimeout` para fechar conexões ociosas e liberar memória.
3. Monitore o tempo de espera por uma conexão livre (Acquisition time).
