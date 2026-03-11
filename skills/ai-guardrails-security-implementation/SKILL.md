---
name: ai-guardrails-security-implementation
description: Implementa camadas de proteção (Guardrails) para garantir que as saídas da IA sejam seguras, éticas e sigam as diretrizes da marca.
---
# `ai-guardrails-security-implementation`
Segurança e controle sobre modelos estocásticos.
## Regras
1. Utilize modelos menores e rápidos (ex: Llama-Guard) para filtrar entradas tóxicas antes de chegarem ao modelo principal.
2. Implemente validadores de formato (regex/Zod) para garantir que a saída da IA seja processável por sistemas de código.
3. Realize "PBI Scanning" (Prompt-Based Injection) para detectar tentativas de jailbreak ou manipulação do prompt do sistema.
---
