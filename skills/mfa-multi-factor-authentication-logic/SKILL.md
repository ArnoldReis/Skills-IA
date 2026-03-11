---
name: mfa-multi-factor-authentication-logic
description: Implementa múltiplos fatores de autenticação (OTP, TOTP, Biometria) para aumentar a segurança da conta do usuário.
---
# `mfa-multi-factor-authentication-logic`
A segunda linha de defesa contra roubo de senhas.
## Regras
1. Utilize TOTP (Time-based One-Time Password) via aplicativos como Google Authenticator por ser mais seguro que SMS.
2. Gere e obrigue o usuário a salvar "Códigos de Recuperação" (Backup Codes) para caso ele perca o acesso ao dispositivo MFA.
3. Não permita o acesso completo ao sistema enquanto o segundo fator não for validado com sucesso.
---
