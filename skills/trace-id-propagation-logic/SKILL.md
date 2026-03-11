---
name: trace-id-propagation-logic
description: Garante que o Trace ID seja passado adiante em todas as chamadas HTTP, mensagens de fila e logs internos.
---
# `trace-id-propagation-logic`
O fio condutor que une dados espalhados pelo sistema.
## Regras
1. Extraia o Trace ID da requisição de entrada e o injete no contexto de execução (ex: AsyncLocalStorage).
2. Use este ID ao criar novos logs ou realizar chamadas para outros microserviços.
3. Utilize os padrões W3C Trace Context (`traceparent`) para máxima compatibilidade entre bibliotecas de terceiros.
---
