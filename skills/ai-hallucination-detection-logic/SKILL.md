---
name: ai-hallucination-detection-logic
description: Implementa técnicas para detectar e reduzir a "Alucinação" (invenção de fatos) nos modelos de linguagem de grande porte.
---
# `ai-hallucination-detection-logic`
Aumentando a confiabilidade e a veracidade das respostas das IAs.
## Regras
1. Exija que a IA cite as fontes (Link/Documento) de cada afirmação feita com base no contexto recuperado.
2. Utilize "Cross-Verification": peça para um segundo modelo independente validar se a resposta do primeiro modelo é suportada pelo contexto histórico.
3. Implemente filtros de "Confidence Score": se o modelo expressar baixa confiança, peça para ele informar que não sabe a resposta.
---
