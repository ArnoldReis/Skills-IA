---
name: fault-injection-testing-logic
description: Implementa técnicas de injeção de falhas (latência, erros HTTP, quebras de socket) durante o ciclo de testes de integração.
---
# `fault-injection-testing-logic`
Testando os limites da resiliência via falhas sintéticas.
## Regras
1. Utilize middlewares ou Service Meshes para injetar latência artificial em chamadas de rede específicas.
2. Valide se a aplicação se comporta corretamente quando uma dependência retorna códigos de erro 5xx ou Timeouts.
3. Automatize esses testes no pipeline de CI para garantir que novas funcionalidades não quebrem as salvaguardas existentes.
---
