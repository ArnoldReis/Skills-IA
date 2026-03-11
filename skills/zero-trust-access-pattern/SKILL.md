---
name: zero-trust-access-pattern
description: Implementa o modelo "Nunca confiar, sempre verificar" (Zero Trust) em comunicações entre serviços internos.
---
# `zero-trust-access-pattern`
Segurança máxima ignorando perímetros de rede tradicionais.
## Regras
1. Não confie no IP de origem; cada requisição deve carregar um token de identidade válido.
2. Utilize mTLS para garantir que apenas serviços autorizados conversem entre si.
3. Aplique políticas de acesso baseadas no contexto (usuário, dispositivo, hora, localização).
---
