---
name: nextjs-server-component-optimizer
description: Analisa e converte componentes para Server Components para reduzir o bundle size de cliente.
---

# `nextjs-server-component-optimizer`
Skill premium para arquiteturas Next.js (App Router). Ajuda a manter o "Client Boundary" o menor possível.

## Regras
1. Identifique componentes que usam `useState` ou `useEffect` apenas para buscar dados iniciais e sugira a conversão para Server Components (Async Components).
2. Verifique o uso de bibliotecas de terceiros que não possuem a diretiva `'use client'` mas tentam acessar hooks.
3. Garanta que funções passadas via props para Client Components sejam serializáveis.

## Como Usar
Acione esta skill durante refatorações de páginas Next.js lentas ou com tempo de carga de JS elevado.
