---
name: fido2-passwordless-auth-logic
description: Implementa autenticação sem senha (Passwordless) usando o padrão FIDO2/WebAuthn para segurança biométrica de nível bancário.
---
# `fido2-passwordless-auth-logic`
Eliminando senhas e frustrações através da biometria nativa.
## Regras
1. Utilize a API `navigator.credentials.create` para registrar novos autenticadores (FaceID, TouchID, Chaves USB).
2. Armazene apenas a Chave Pública no servidor; a assinatura é verificada sem nunca trafegar dados biométricos.
3. Forneça sempre um método de recuperação alternativo seguro para usuários que perderem o acesso ao dispositivo físico.
---
