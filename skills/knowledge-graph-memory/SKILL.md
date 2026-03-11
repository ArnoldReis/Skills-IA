---
name: knowledge-graph-memory
description: Persistência de contexto a longo prazo e nós-vetor de relacionamento.
---

# `knowledge-graph-memory`
Permite ao Agente "lembrar" do contexto do usuário entre sessões ou armazenar *Learning Items* baseada num key-value vector.

## Regras
1. Sempre verifique o namespace do Knowledge (user scope vs project scope).
2. Tente buscar um nó antigo (`queryNode`) antes de regravar novos.
3. Útil quando você refatora um módulo inteiro e precisa lembrar "qual é a config global atual? "
