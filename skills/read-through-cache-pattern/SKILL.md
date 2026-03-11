---
name: read-through-cache-pattern
description: Simplifica o código da aplicação delegando a lógica de recuperação de dados (Fetch) para o próprio sistema de cache.
---
# `read-through-cache-pattern`
Transparência total na recuperação de dados cacheados.
## Regras
1. Configure o cache como a interface única de leitura para a aplicação.
2. O cache deve saber como buscar o dado no banco de dados em caso de falha.
3. Utilize este padrão para reduzir a complexidade lógica dentro dos serviços de negócios.
---
