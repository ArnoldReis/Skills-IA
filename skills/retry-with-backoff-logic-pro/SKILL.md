---
name: retry-with-backoff-logic-pro
description: Implementa lógicas de repetição com atraso exponencial (Exponential Backoff) e Jitter para evitar "Thundering Herd".
---
# `retry-with-backoff-logic-pro`
Persistência inteligente na comunicação com sistemas instáveis.
## Regras
1. Não tente repetir requisições imediatamente; espere um tempo que dobra a cada tentativa.
2. Adicione "Jitter" (variação aleatória) ao tempo de espera para evitar que muitos clientes tentem reconectar ao mesmo tempo.
3. Limite o número máximo de tentativas para evitar loops infinitos e exaustão de recursos.
---
