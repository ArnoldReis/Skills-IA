---
name: grpc-bidirectional-streaming-pro
description: Implementa canais de comunicação gRPC onde tanto cliente quanto servidor podem enviar e receber mensagens assincronamente.
---
# `grpc-bidirectional-streaming-pro`
Colaboração em tempo real e de baixa latência em nível de protocolo.
## Regras
1. Defina o método no .proto com `stream` tanto na entrada quanto no retorno.
2. Mantenha instâncias de leitura e escrita independentes para permitir conversas paralelas e assíncronas.
3. Implemente lógicas de controle de fluxo para evitar que um lado sobrecarregue o outro (Back-pressure).
---
