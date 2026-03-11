---
name: react-performance-refactor
description: Analisador de React que destrói Gargalos, Multi-renders inline effects e useMemos vazando.
---

# `react-performance-refactor`
Ferramenta para reestruturar árvores React lentas. Identifica objetos literais puros passando repetidamente para contextos e `useEffect` disparando infinitamente.

## Regras
1. Todo objeto criado dentro de um React Component que é passado para um Filho e que possui cálculos custosos deve ser refatorado para ter referência salva.
2. Verifique dependências de useCallback vazias que fecham escopo sobre o estado (Stale Closures).
