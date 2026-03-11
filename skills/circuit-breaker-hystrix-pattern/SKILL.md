---
name: circuit-breaker-hystrix-pattern
description: Implementa o padrão de isolamento e disjuntor popularizado pelo Netflix Hystrix (Threads vs Semaphore).
---
# `circuit-breaker-hystrix-pattern`
Isolamento rigoroso de recursos contra falhas externas.
## Regras
1. Utilize pooling de threads para isolar chamadas para diferentes dependências externas.
2. Forneça um mecanismo de `fallback` que retorne dados padrão ou de cache em caso de erro na dependência.
3. Monitore métricas de latência e taxa de erro em janelas de tempo deslizantes.
---
