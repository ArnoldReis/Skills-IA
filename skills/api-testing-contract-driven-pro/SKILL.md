---
name: api-testing-contract-driven-pro
description: Implementa testes de contrato (ex: Pact) para garantir que mudanças no produtor não quebrem as expectativas do consumidor.
---
# `api-testing-contract-driven-pro`
Garantindo que a promessa da API seja cumprida em ambos os lados.
## Regras
1. O consumidor define os "Pacts" (expectativas de resposta) e os compartilha com o produtor.
2. O produtor deve rodar testes que validam sua implementação atual contra os Pacts registrados antes de qualquer deploy.
3. Utilize um "Pact Broker" para gerenciar e versionar os contratos entre diferentes serviços e versões.
---
