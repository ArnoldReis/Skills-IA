---
name: microservices-communication-patterns
description: Domina padrões de comunicação síncrona (REST, gRPC) e assíncrona (RabbitMQ, Kafka) entre serviços.
---
# `microservices-communication-patterns`
Orquestração eficiente da conversa entre serviços isolados.
## Regras
1. Utilize gRPC para comunicações internas de alta performance e baixa latência.
2. Prefira mensageria assíncrona para operações que não precisam de resposta imediata, aumentando o desacoplamento.
3. Implemente o padrão "Sidecar" para delegar lógica de rede (retry, timeout) a um proxy como Envoy.
---
