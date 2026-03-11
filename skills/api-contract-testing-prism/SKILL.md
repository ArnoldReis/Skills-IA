---
name: api-contract-testing-prism
description: Valida se a API segue rigorosamente o contrato OpenAPI definido, evitando discrepâncias entre Frontend e Backend.
---
# `api-contract-testing-prism`
Garantia de que o combinado não sai caro.
## Regras
1. Utilize o arquivo `swagger.json` como verdade absoluta.
2. Execute o Prism Proxy em CI/CD para validar as respostas reais.
3. Alerte imediatamente se uma mudança no código quebrou o contrato esperado.
