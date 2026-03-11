---
name: graceful-shutdown-handler-pro
description: Implementa o desligamento suave da aplicação, fechando conexões pendentes e salvando estados antes da parada.
---
# `graceful-shutdown-handler-pro`
Saindo de cena sem quebrar requisições em andamento.
## Regras
1. Interrompa o recebimento de novas requisições (Readiness = False).
2. Aguarde um tempo de cortesia (Grace Period) para que as requisições em voo sejam finalizadas.
3. Feche conexões com bancos de dados e libere recursos de memória de forma ordenada.
---
