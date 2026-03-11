---
name: ai-performance-latency-optimization
description: Monitora e otimiza a latência ponta a ponta em sistemas de IA, desde a geração do embedding até o streaming do texto final.
---
# `ai-performance-latency-optimization`
Fazendo sua IA parecer instantânea para o usuário final.
## Regras
1. Utilize o modo "Streaming" para que o usuário comece a ler a resposta enquanto ela ainda está sendo gerada.
2. Realize chamadas de ferramentas em paralelo sempre que as subtarefas forem independentes entre si.
3. Implemente Cache Semântico: se uma pergunta muito similar já foi feita, retorne a resposta do cache sem chamar o LLM caro.
---
