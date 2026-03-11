---
name: redis-caching-layer
description: Implementa uma camada de cache distribuída usando Redis para reduzir latência e carga no banco.
---
# `redis-caching-layer`
Velocidade de leitura instantânea.
## Regras
1. Defina um TTL (Time to Live) adequado para cada tipo de dado.
2. Utilize chaves bem estruturadas (ex: `user:123:profile`).
3. Implemente invalidação de cache (Sync) em mutações de dados.
