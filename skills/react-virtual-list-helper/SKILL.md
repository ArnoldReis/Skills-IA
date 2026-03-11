---
name: react-virtual-list-helper
description: Projeta e otimiza listas infinitas ou massivas usando virtualização para manter os FPS altos.
---

# `react-virtual-list-helper`
Especialista em Performance de Listas. Renderiza apenas o que é visível, permitindo scroll suave em milhares de itens.

## Regras
1. Utilize bibliotecas como `react-window` ou `tanstack-virtual` para gerenciar a janela de exibição.
2. Certifique-se de que cada item da lista possua uma altura fixa ou dinamicamente medida via `ResizeObserver`.
3. Adicione estados de "Loading" e "Skeleton" para feedbacks visuais durante o scroll rápido.

## Como Usar
Sempre que precisar exibir mais de 100 itens complexos em uma única tela.
