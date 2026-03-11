---
name: anti-corruption-layer-acl-pro
description: Implementa uma camada de tradução (ACL) para proteger o novo sistema contra a influência do modelo de dados legado.
---
# `anti-corruption-layer-acl-pro`
Pares de tradução para manter seu domínio novo limpo.
## Regras
1. Crie uma camada que mapeia as primitivas do sistema legado para as entidades do novo domínio.
2. Não permita que conceitos de negócio confusos do legado "vazem" para o novo código.
3. Utilize a ACL como ponte temporária durante o processo de migração (Strangler Fig).
---
