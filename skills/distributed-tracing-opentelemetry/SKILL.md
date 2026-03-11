---
name: distributed-tracing-opentelemetry
description: Implementa rastreamento distribuído usando OpenTelemetry para visualizar o fluxo de requisições entre microserviços.
---
# `distributed-tracing-opentelemetry`
Visibilidade ponta a ponta em sistemas distribuídos complexos.
## Regras
1. Utilize o padrão OpenTelemetry (OTel) para evitar vendor lock-in com ferramentas de rastreamento.
2. Instrua todos os serviços a propagar o `traceparent` header em todas as chamadas de rede.
3. Adicione atributos semânticos (ex: `http.method`, `db.statement`) para enriquecer os spans com contexto útil.
---
