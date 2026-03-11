---
name: hydration-error-fixer
description: Detecta e resolve descasamentos (mismatch) entre o HTML gerado no servidor e o hidratado no cliente.
---

# `hydration-error-fixer`
Especialista em SSR (Server Side Rendering). Resolve o temido erro de "Hydration failed" que causa perda de performance e bugs viscerais na UI.

## Regras
1. Verifique o uso de datas dinâmicas (`new Date()`) ou `Math.random()` que mudam entre o render do servidor e cliente.
2. Identifique extensões de navegador ou injeções de script que alteram o DOM de forma invisível.
3. Utilize componentes de "Client-Only" ou supressão de hidratação (`suppressHydrationWarning`) apenas em casos extremos e justificados.

## Como Usar
Acione imediatamente quando encontrar erros de "Hydration failed because the initial UI does not match what was rendered on the server".
