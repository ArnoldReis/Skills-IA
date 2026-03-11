---
name: rest-to-grpc-transcoding-logic
description: Implementa a camada de tradução (Transcoding) que permite clientes REST JSON acessarem serviços gRPC nativos.
---
# `rest-to-grpc-transcoding-logic`
O melhor dos dois mundos: gRPC internamente, REST externamente.
## Regras
1. Utilize anotações de HTTP (google.api.http) nos arquivos .proto para mapear endpoints REST para métodos gRPC.
2. Utilize gateways (ex: grpc-gateway ou Envoy Proxy) para realizar a tradução automática entre JSON e Protobuf.
3. Garanta que os headers e códigos de erro sejam mapeados corretamente entre os dois protocolos.
---
