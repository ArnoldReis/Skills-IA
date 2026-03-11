---
name: circuit-breaker-implementation-pro
description: Implementa o padrão de Disjuntor (Circuit Breaker) para interromper chamadas a serviços instáveis e permitir recuperação.
---
# `circuit-breaker-implementation-pro`
Proteção automática contra falhas em cascata em sistemas distribuídos.
## Regras
1. Monitore a taxa de erro; se ultrapassar o limiar, abra o circuito e retorne erros rápidos (Fast Fail).
2. Utilize o estado "Half-Open" para testar se o serviço remoto voltou à vida com uma carga pequena de tráfego.
3. Sempre forneça uma resposta de contingência (Fallback) quando o circuito estiver aberto.
---
