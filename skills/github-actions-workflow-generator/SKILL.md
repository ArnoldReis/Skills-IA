---
name: github-actions-workflow-generator
description: Gera workflows CI/CD automatizados para GitHub Actions com foco em build, teste e deploy.
---
# `github-actions-workflow-generator`
Automação total do ciclo de vida do software.
## Regras
1. Utilize cache de dependências (`actions/cache`) para acelerar as execuções.
2. Separe as etapas de Teste, Lint e Deploy em Jobs diferentes.
3. Configure notificações de falha em commits ou pull requests.
