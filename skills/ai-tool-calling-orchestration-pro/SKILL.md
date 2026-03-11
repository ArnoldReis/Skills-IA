---
name: ai-tool-calling-orchestration-pro
description: Gerencia a capacidade das IAs de invocar ferramentas externas (APIs, Scripts) para interagir com o mundo real.
---
# `ai-tool-calling-orchestration-pro`
Dando braços e pernas para os seus modelos de linguagem.
## Regras
1. Defina esquemas JSON rigorosos (JSON Schema) para cada ferramenta para evitar invocações com parâmetros inválidos.
2. Implemente um loop de "Tool Execution" onde o modelo pode chamar múltiplas ferramentas sequencialmente.
3. Filtre e valide as saídas das ferramentas antes de devolvê-las ao modelo para prevenir injeções de dados maliciosos.
---
