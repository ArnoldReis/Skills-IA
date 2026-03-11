---
name: strangler-fig-migration-pattern
description: Migra sistemas legados para microserviços gradualmente, "estrangulando" o antigo com novas funcionalidades.
---
# `strangler-fig-migration-pattern`
Evolução segura de monolitos para microserviços.
## Regras
1. Utilize um Proxy ou API Gateway para rotear chamadas entre o sistema legado e o novo serviço.
2. Implemente novas funcionalidades diretamente no novo sistema, evitando aumentar o débito técnico do legado.
3. Desative partes do legado apenas quando o novo serviço estiver totalmente validado em produção.
---
