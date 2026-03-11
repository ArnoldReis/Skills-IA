---
name: backend-cors-policy-manager
description: Configura e gerencia políticas de Cross-Origin Resource Sharing (CORS) para acesso seguro à API.
---
# `backend-cors-policy-manager`
Controle seletivo de quem pode conversar com sua API.
## Regras
1. Nunca use `*` em produção; especifique domínios permitidos.
2. Permita apenas os métodos HTTP necessários (GET, POST, etc).
3. Habilite `credentials: true` se precisar enviar cookies ou headers de autorização entre domínios.
