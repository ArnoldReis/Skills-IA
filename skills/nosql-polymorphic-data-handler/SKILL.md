---
name: nosql-polymorphic-data-handler
description: Implementa padrões para gerenciar coleções NoSQL que armazenam múltiplos tipos de entidades (Polimorfismo).
---
# `nosql-polymorphic-data-handler`
Flexibilidade de tipos na mesma estrutura de dados.
## Regras
1. Utilize um campo discriminador obrigatório (ex: `type`, `__kind`) para identificar a entidade.
2. Utilize interfaces ou uniões de tipos (Typescript Union) para tratar cada variante de forma segura.
3. Evite aninhamento excessivo se diferentes tipos exigirem lógicas de busca drasticamente diferentes.
---
