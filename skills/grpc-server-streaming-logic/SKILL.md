---
name: grpc-server-streaming-logic
description: Implementa fluxos onde o servidor envia múltiplas mensagens em resposta a uma única requisição do cliente.
---
# `grpc-server-streaming-logic`
Entrega contínua de dados do servidor para o cliente.
## Regras
1. Utilize o padrão `stream` no retorno do método .proto.
2. O servidor deve ser capaz de enviar mensagens conforme elas são geradas ou lidas do banco sem fechar a conexão.
3. Garanta que o cliente consiga lidar com o encerramento do stream pelo servidor ou por erro de rede.
---
