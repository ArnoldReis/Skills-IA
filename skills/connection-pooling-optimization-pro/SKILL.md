---
name: connection-pooling-optimization-pro
description: Gerencia pools de conexão (DB, HTTP, Redis) para evitar o custo de abertura de conexões e saturação de recursos.
---
# `connection-pooling-optimization-pro`
Gerenciamento inteligente de conexões de longa duração.
## Regras
1. Configure o tamanho do pool (`max_connections`) baseado na capacidade de CPU/Memória do servidor alvo.
2. Implemente timeouts de aquisição de conexão para evitar que requisições fiquem presas em filas cheias.
3. Monitore a saúde do pool e reinicie conexões que apresentem sinais de instabilidade ou lentidão.
---
