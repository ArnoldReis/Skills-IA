---
name: integration-design-patterns-review
description: Fornece uma revisão completa dos padrões de design de integração (EIP) aplicáveis a sistemas distribuídos modernos.
---
# `integration-design-patterns-review`
O catálogo mestre para conectar sistemas de forma elegante.
## Regras
1. Escolha o padrão de integração correto: Messaging, Webhooks, APIs ou Shared Database (evite este último).
2. Utilize o padrão `Enricher` para adicionar dados a mensagens antes de enviá-las a consumidores que precisam de contexto extra.
3. Implemente `Aggregators` para combinar mensagens relacionadas em uma única entidade de domínio coesa.
---
