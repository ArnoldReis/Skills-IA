---
name: system-cli-executor
description: Executor genérico e seguro de Bash/PowerShell com Timeout rigoroso.
---

# `system-cli-executor`
Um wrapper do ecossistema Node `child_process` para Antigravity atuar no sistema hospedeiro via shell.

## Regras
1. Utilize apenas para builds (`npm run build`), linters (`eslint`) ou sub-ferramentas globais.
2. Operações demoradas devem sempre ter Timeout embutido.
3. Se gerar artefatos em output dir, armazene a pasta via `filesystem-manager`.

## Como Cuidar de Erros
Se o exit code for maior de 0, lance imediatamente o erro com o payload de stderr.
