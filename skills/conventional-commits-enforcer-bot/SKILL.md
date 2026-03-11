---
name: conventional-commits-enforcer-bot
description: Automatiza a padronização de mensagens de commit seguindo o padrão Conventional Commits para facilitar o versionamento semântico.
---
# `conventional-commits-enforcer-bot`
Mensagens de histórico de código legíveis e prontas para automação.
## Regras
1. Utilize os prefixos padrão: `feat` (nova feature), `fix` (correção), `docs` (documentação), `refactor` (mudança sem alteração de funcionalidade).
2. Adicione uma exclamação (`feat!`) para indicar Breaking Changes na mensagem do commit.
3. Utilize ferramentas como `commitlint` e `husky` para barrar commits fora do padrão antes que cheguem ao repositório.
---
