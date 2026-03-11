---
name: filesystem-manager
description: Operações de sistema de arquivos seguras e avançadas (sandboxing, list_dir, view_file, replace).
---

# `filesystem-manager`
Skill essencial do ecossistema Antigravity para interação com o ambiente local.

## Regras
1. Todo file system precisa atuar no modo de "sandbox".
2. Jamais modifique arquivos no `C:` raiz sem permissão do usuário.
3. Se um arquivo for apenas visualizado, limite o tamanho do log lido de uma vez para não estourar o limite de token (ex: 800 linhas max).

## Como usar
Acione a ferramenta interna quando o prompt envolver "listar pastas", "ler arquivos" ou "escrever arquivos de código". Utilize as funções de apoio sempre passando parâmetros de caminho absoluto validados pelo `sandboxCheck`.
