---
name: secure-bootstrapping-pattern
description: Implementa padrões para inicialização segura de novos nós e serviços na rede, com atribuição automática de identidade.
---
# `secure-bootstrapping-pattern`
Nascimento de serviços com segurança embarcada desde o primeiro bit.
## Regras
1. Utilize o SPIFFE/SPIRE para dar identidades únicas a cargas de trabalho dinâmicas.
2. Utilize "Token de Unificação" (Join Token) de uso único e tempo curto para novos nós ingressarem no cluster.
3. Configure os serviços para buscarem suas configurações e segredos iniciais em um cofre seguro (Vault) via transit-auth.
---
