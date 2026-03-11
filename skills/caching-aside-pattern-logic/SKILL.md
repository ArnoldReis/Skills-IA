---
name: caching-aside-pattern-logic
description: Implementa o padrão Cache Aside, onde a aplicação gerencia a carga e a expiração dos dados no cache.
---
# `caching-aside-pattern-logic`
Alta performance delegada à gestão manual e eficiente do cache.
## Regras
1. Tente ler do cache primeiro; se falhar (Cache Miss), busque no banco e alimente o cache.
2. Utilize Time-to-Live (TTL) adequado para evitar dados desatualizados por muito tempo.
3. Invalide o cache manualmente durante as operações de escrita para garantir consistência.
---
