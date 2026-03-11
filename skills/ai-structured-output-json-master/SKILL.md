---
name: ai-structured-output-json-master
description: Garante que a IA responda sempre em formatos estruturados (JSON/YAML) válidos e consistentes para integração com sistemas.
---
# `ai-structured-output-json-master`
Transformando conversas fluidas em dados rigorosos para o seu código.
## Regras
1. Utilize o modo "JSON Mode" ou "Function Calling" do provedor de IA para forçar a saída estruturada nativamente.
2. Sempre forneça um exemplo do schema desejado no prompt do sistema.
3. Implemente uma camada de "Parrying/Retry": se o JSON vier quebrado, envie o erro de volta para a IA corrigir em um segundo turno.
---
