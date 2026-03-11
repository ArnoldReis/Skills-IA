---
name: adapter-pattern-architecture-pro
description: Implementa adaptadores para converter interfaces de serviços de terceiros para o formato esperado pelo seu sistema.
---
# `adapter-pattern-architecture-pro`
A ponte de compatibilidade entre mundos de software diferentes.
## Regras
1. Defina uma interface interna que representa o que o seu sistema precisa de um serviço externo.
2. Crie adaptadores concretos para cada provedor externo (ex: StripeAdapter, PaypalAdapter).
3. Garanta que a troca de adaptadores possa ser feita via configuração, sem alterar a lógica de negócios central.
---
