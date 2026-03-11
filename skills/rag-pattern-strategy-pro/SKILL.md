---
name: rag-pattern-strategy-pro
description: Implementa o padrão Retrieval Augmented Generation (RAG) para fornecer contexto relevante e atualizado para modelos de linguagem.
---
# `rag-pattern-strategy-pro`
Conectando LLMs aos seus próprios dados de forma estruturada.
## Regras
1. Utilize um banco de dados vetorial (Pinecone, Milvus, pgvector) para realizar buscas semânticas eficientes.
2. Fragmente os documentos (Chunking) em tamanhos ideais (ex: 500-1000 tokens) com sobreposição para não perder o contexto.
3. Classifique os resultados recuperados por relevância antes de injetá-los no prompt do modelo.
---
