---
name: ambassador-pattern-implementation
description: Implementa um serviço auxiliar (Ambassador) que lida com tarefas de rede externas, como monitoramento e roteamento.
---
# `ambassador-pattern-implementation`
O seu representante diplomático para o mundo das redes externas.
## Regras
1. Use o Ambassador para abstrair a complexidade de conexão com serviços externos (ex: APIs de bancos).
2. Centralize a lógica de autenticação com terceiros e renovação de tokens no Ambassador.
3. Permita que a aplicação principal consuma o Ambassador via `localhost`, simplificando as configurações de rede.
---
