---
name: rate-limiting-token-bucket
description: Implementa o algoritmo Token Bucket para permitir rajadas curtas de tráfego enquanto mantém uma média sustentável.
---
# `rate-limiting-token-bucket`
Flexibilidade para rajadas controladas de uso da API.
## Regras
1. Adicione tokens a um balde em uma taxa fixa; cada requisição consome um token.
2. Permita que o balde acumule tokens até um limite, possibilitando rajadas de requisições rápidas.
3. Rejeite requisições se não houver tokens disponíveis no balde.
---
