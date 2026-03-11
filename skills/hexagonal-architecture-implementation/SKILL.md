---
name: hexagonal-architecture-implementation
description: Implementa o padrão de Portas e Adaptadores (Hexagonal) para manter a lógica de domínio isolada de tecnologias externas.
---
# `hexagonal-architecture-implementation`
Domínio soberano e infraestrutura trocável.
## Regras
1. Defina Interfaces (Ports) claras para tudo o que entra ou sai da aplicação.
2. Mantenha a lógica de negócios no centro (Inside), sem dependências de frameworks ou bancos de dados.
3. Crie Adaptadores (Adapters) específicos para cada tecnologia (ex: PostgresAdapter, RESTAdapter).
---
