---
name: cloudsflare-workers-edge-logic
description: Implementa lógica de borda (Edge Computing) usando Cloudflare Workers para baixa latência.
---
# `cloudsflare-workers-edge-logic`
Velocidade global sem servidores centrais.
## Regras
1. Utilize o `Worktop` ou `Hono` para roteamento leve na borda.
2. Minimize o uso de bibliotecas pesadas de Node.js que não rodam no V8 Isolates.
3. Utilize Cloudflare KV ou Durable Objects para persistência de dados.
