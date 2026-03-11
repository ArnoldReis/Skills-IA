---
name: database-warm-up-strategy
description: Estratégias para pré-carregar caches de banco de dados (Warm-up) após deploys ou reinicializações.
---
# `database-warm-up-strategy`
Performance máxima desde o primeiro segundo do servidor.
## Regras
1. Execute queries mais frequentes e lentas logo após o boot da aplicação para encher o cache do banco (Buffer Pool).
2. Utilize o `pg_prewarm` no Postgres para carregar tabelas críticas na memória RAM.
3. Monitore o `Cache Hit Ratio` durante a fase de warm-up.
