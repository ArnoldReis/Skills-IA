---
name: hard-vs-soft-dependency-logic
description: Distingue e implementa diferentes comportamentos para dependências críticas (Hard) e opcionais (Soft) em caso de falha.
---
# `hard-vs-soft-dependency-logic`
Degradação graciosa de funcionalidades baseada na importância da dependência.
## Regras
1. Falha em Dependência 'Hard' (ex: Banco de Dados): O sistema deve parar e retornar erro 500, pois não pode operar sem ela.
2. Falha em Dependência 'Soft' (ex: Serviço de Recomendação): O sistema deve continuar operando, apenas ocultando ou desabilitando a funcionalidade afetada.
3. Utilize timeouts mais curtos e Circuit Breakers agressivos para dependências Soft para não atrasar a resposta principal.
---
