---
name: database-per-service-logic
description: Garante que cada microserviço possua seu próprio banco de dados isolado, impedindo acoplamento via dados.
---
# `database-per-service-logic`
Isolamento total de persistência para independência de escala e deploy.
## Regras
1. Proíba que um serviço acesse diretamente as tabelas de outro serviço.
2. Escolha a tecnologia de banco de dados mais adequada para o problema específico de cada serviço (Polyglot Persistence).
3. Utilize APIs ou eventos para compartilhar dados entre serviços quando necessário.
---
