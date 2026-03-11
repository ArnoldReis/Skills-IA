---
name: grpc-client-streaming-logic
description: Implementa fluxos onde o cliente envia múltiplas mensagens e recebe uma única resposta agregada do servidor.
---
# `grpc-client-streaming-logic`
Upload eficiente de sequências de dados via gRPC.
## Regras
1. Utilize o padrão `stream` no parâmetro de entrada do método .proto.
2. O servidor deve processar ou acumular os dados e só responder (callback) após o cliente sinalizar o fim do envio.
3. Utilize este padrão para uploads de arquivos em pedaços ou envio de lotes de telemetria.
---
