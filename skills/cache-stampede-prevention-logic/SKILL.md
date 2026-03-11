---
name: cache-stampede-prevention-logic
description: Implementa algoritmos para prevenir o efeito "Cache Stampede" (Thundering Herd) quando um item quente do cache expira.
---
# `cache-stampede-prevention-logic`
Evitando que o banco de dados caia quando o cache expira.
## Regras
1. Utilize `Wait-and-Retry` ou `Locking` para que apenas um processo atualize o cache enquanto os outros esperam.
2. Utilize `Stale-While-Revalidate`: retorne o dado antigo enquanto uma versão nova é buscada em background.
3. Adicione um "Jitter" aleatório no TTL para evitar que milhões de chaves expirem exatamente no mesmo milissegundo.
---
