---
name: grpc-unary-communication-pro
description: Implementa chamadas gRPC simples (Unary) seguindo o modelo Request-Response, mas sobre HTTP/2 e binário.
---
# `grpc-unary-communication-pro`
Eficiência gRPC para interações ponto-a-ponto simples.
## Regras
1. Defina serviços RPC que aceitam uma única mensagem de entrada e retornam uma única de saída.
2. Utilize o HTTP/2 para multiplexação de requisições sobre a mesma conexão TCP.
3. Implemente tratamento de erros usando os códigos de status canônicos do gRPC (ex: NOT_FOUND, PERMISSION_DENIED).
---
