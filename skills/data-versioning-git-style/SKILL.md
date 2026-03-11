---
name: data-versioning-git-style
description: Implementa versionamento de dados inspirado em Git (branching, merging) para datasets e arquivos de configuração.
---
# `data-versioning-git-style`
Controle de versão total para o seu conteúdo e dados.
## Regras
1. Utilize o Dolt (SQL com Git) ou ferramentas como DVC para datasets massivos.
2. Cada mudança deve gerar um Commit ID único e imutável.
3. Utilize as funcionalidades de diff para comparar estados anteriores dos dados.
