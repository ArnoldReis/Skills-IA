---
name: smoke-testing-integration-pipeline
description: Implementa testes de fumaça (Smoke Tests) rápidos após o deploy para validar os caminhos críticos da aplicação.
---
# `smoke-testing-integration-pipeline`
A verificação final antes de abrir as portas para os usuários.
## Regras
1. Foque nos processos vitais (Login, Busca, Checkout); se o fumo subir aqui, o deploy deve ser revertido.
2. Os Smoke Tests devem ser rápidos (máx. 2 min) para não atrasar o ciclo de feedback do pipeline.
3. Utilize dados reais (ou muito próximos do real) para garantir que a conexão com o banco e APIs externas está íntegra.
---
