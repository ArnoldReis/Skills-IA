---
name: api-spec-first-development-master
description: Define o processo de desenvolvimento Spec-first, onde o contrato da API é criado e aprovado antes de qualquer linha de código.
---
# `api-spec-first-development-master`
Design robusto e paralelo através de contratos de interface.
## Regras
1. Escreva o contrato (OpenAPI/AsyncAPI) e use geradores de Mock para permitir que o frontend comece a trabalhar imediatamente.
2. Utilize validadores de schema que bloqueiam qualquer código ou teste que não siga a especificação à risca.
3. Trate a especificação como a "Única Fonte de Verdade" e gere automaticamente documentação e SDKs a partir dela.
---
