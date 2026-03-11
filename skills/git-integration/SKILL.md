---
name: git-integration
description: Comandos e abstração de Git Versioning (commit, checkout, log).
---

# `git-integration`
Provê integração local e segura com repositórios Git, formatando *commits* com base na semântica LLM do Antigravity.

## Regras
1. Sempre verifique `git status` antes de atuar para não cometer erros num repositório não inicializado.
2. Formate as mensagens em Conventional Commits (`feat: `, `fix: `, `chore: `).
3. Nunca execute `git push` no `main` automaticamente. Envie branches separados.
