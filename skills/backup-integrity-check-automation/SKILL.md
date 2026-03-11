---
name: backup-integrity-check-automation
description: Automatiza o teste de restauração de backups para garantir que os arquivos salvos são de fato utilizáveis em uma emergência.
---
# `backup-integrity-check-automation`
Um backup que não foi testado não existe.
## Regras
1. Agende tarefas automáticas que baixam um backup recente e tentam restaurá-lo em um ambiente de sandbox isolado.
2. Execute queries de fumaça (Smoke Tests) no banco restaurado para verificar se os dados principais estão lá.
3. Alerte o time se a restauração automática falhar ou se o dado restaurado parecer corrompido.
---
