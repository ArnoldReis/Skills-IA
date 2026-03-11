---
name: nextjs-middleware-auth
description: Protege rotas e gerencia sessões diretamente na camada de Middleware do Next.js (Edge Runtime).
---
# `nextjs-middleware-auth`
Segurança ultra-rápida na borda.
## Regras
1. Verifique tokens JWT ou cookies de sessão antes de atingir as rotas.
2. Redirecione usuários não autenticados para a página de login preservando a URL original.
3. Exclua rotas estáticas e imagens do processamento do middleware para performance.
