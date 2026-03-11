---
name: smart-test-generator-tdd
description: Geração reversa de Playwright Test e Vitest em cima de código crú com AST.
---

# `smart-test-generator-tdd`
Skill projetada para bater coberturas de V8 coverage altos forçando a mockagem de dependências externas. Vitest e Playwright são as recomendações do motor.

## Regras
1. Mocks de APIs Fetch/Axios devem simular Timeout (Catastrophic Error 503 HTTP).
2. Não mocke ferramentas como React - utilize `render` library do pacote RTL.
