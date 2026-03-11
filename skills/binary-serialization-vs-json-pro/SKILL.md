---
name: binary-serialization-vs-json-pro
description: Avalia e escala o uso de formatos binários (Protobuf, MessagePack, Avro) comparado ao JSON para otimizar largura de banda e CPU.
---
# `binary-serialization-vs-json-pro`
Escolhendo o formato de dados certo para cada contexto.
## Regras
1. JSON: Use para APIs públicas, debugging fácil e interoperabilidade universal onde o tamanho do payload é pequeno.
2. Binário: Use para comunicação interna (Service-to-Service), dados massivos ou onde a latência de rede é o gargalo.
3. Implemente benchmarks reais de serialização e desserialização antes de migrar sistemas complexos para binário.
---
