---
name: zusta-state-sync
description: Gerenciador de sincronização de estado global (Zustand) com persistência e devlogs.
---

# `zusta-state-sync`
Especialista em Gerenciamento de Estado leve. Melhora a previsibilidade de dados entre abas e sessões.

## Regras
1. Utilize o middleware de `persist` para estados que precisam sobreviver ao reload.
2. Implemente seletores atômicos para evitar re-renders desnecessários em componentes que consomem apenas parte do store.
3. Adicione logs detalhados em ambiente de desenvolvimento para rastrear mutações de estado via agente.

## Como Usar
Ideal para aplicações com fluxos complexos de dados (ex: Dashboard financeiro, CRM) onde a consistência é chave.
