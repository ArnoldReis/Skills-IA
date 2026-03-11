---
name: biometric-authentication-flow-pro
description: Implementa fluxos seguros para autenticação biométrica (FaceID, TouchID) via WebAuthn e FIDO2.
---
# `biometric-authentication-flow-pro`
Login seguro e conveniente sem senhas tradicionais.
## Regras
1. Utilize a API `navigator.credentials` para interagir com autenticadores locais de hardware.
2. Valide as assinaturas criptográficas geradas pelo dispositivo no backend antes de autorizar o acesso.
3. Ofereça métodos de recuperação robustos caso o usuário perca o acesso ao dispositivo biométrico titular.
---
