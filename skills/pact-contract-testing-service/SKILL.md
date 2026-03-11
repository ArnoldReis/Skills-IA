---
name: pact-contract-testing-service
description: Implementa testes de contrato com Pact para garantir que o Consumer e o Provider de uma API permaneçam em sincronia sem testes E2E lentos.
---
# `pact-contract-testing-service`
Desacoplando o desenvolvimento de microserviços com contratos garantidos.
## Regras
1. O Consumer define suas expectativas em um arquivo "Pact" (contrato).
2. O Provider valida que ele cumpre as expectativas definidas no contrato em cada build de CI.
3. Utilize um "Pact Broker" para gerenciar as versões dos contratos e evitar deploys que quebrem a integração.
---
