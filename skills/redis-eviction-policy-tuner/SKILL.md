---
name: redis-eviction-policy-tuner
description: Configura e calibra políticas de despejo (Eviction) do Redis para gerenciar a memória de forma eficiente.
---
# `redis-eviction-policy-tuner`
Gestão inteligente de memória sob pressão.
## Regras
1. Utilize `allkeys-lru` para caches gerais onde dados menos usados devem sair primeiro.
2. Utilize `volatile-ttl` para remover apenas chaves que possuem um prazo de validade definido.
3. Monitore as `evicted_keys` no comando `INFO` do Redis para saber se o cache está pequeno demais.
