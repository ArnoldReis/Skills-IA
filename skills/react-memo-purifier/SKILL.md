---
name: react-memo-purifier
description: Analisa o uso de React.memo e detecta quando ele é ineficaz devido a props instáveis.
---

# `react-memo-purifier`
Auditor de Memorização. Evita o overhead do `React.memo` quando as props estão sempre mudando por falta de `useMemo/useCallback` no pai.

## Regras
1. Verifique se as props passadas ao componente memorizado são objetos literais ou funções sem `useCallback`.
2. Sinalize o uso excessivo de `React.memo` em componentes muito simples onde a comparação de props custa mais que o render.
3. Sugira uma função de comparação customizada (`areEqual`) quando apenas algumas props forem relevantes para o render.

## Como Usar
Use ao debugar por que um componente envolto em `memo` continua re-renderizando sem necessidade.
