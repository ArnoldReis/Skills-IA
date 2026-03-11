---
name: react-hook-leak-detector
description: Monitora e detecta dependências ausentes ou closures obsoletas em hooks do React.
---

# `react-hook-leak-detector`
Especialista em integridade de Hooks. Evita bugs catastróficos de estado "stale" e loops infinitos de renderização.

## Regras
1. Verifique se o array de dependências do `useEffect` reflete todas as variáveis locais usadas no corpo do hook.
2. Identifique subscrições (Event Listeners, WebSockets) que não possuem função de limpeza (cleanup).
3. Sinalize o uso de `setTimeout` ou `setInterval` dentro de efeitos sem o respectivo `clearTimeout/clearInterval`.

## Como Usar
Ideal para sessões de depuração onde o estado da UI parece incoerente ou quando há vazamento de memória.
