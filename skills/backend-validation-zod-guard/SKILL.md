---
name: backend-validation-zod-guard
description: Implementa segurança de entrada (Input Validation) no backend usando esquemas Zod.
---
# `backend-validation-zod-guard`
A primeira linha de defesa contra dados maliciosos.
## Regras
1. Valide todo o lixo que vem de fora (Body, Query, Params).
2. Utilize `strip()` para remover campos não autorizados do payload.
3. Utilize mensagens de erro amigáveis para feedback direto à API externa.
