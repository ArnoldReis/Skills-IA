---
name: ansible-playbook-dry-run-pro
description: Executa playbooks Ansible em modo 'Check' para prever mudanças sem alterar os servidores reais.
---
# `ansible-playbook-dry-run-pro`
Configurações seguras e previsíveis.
## Regras
1. Utilize o modo `--check` e `--diff` para ver exatamente o que mudaria.
2. Valide o inventário de servidores antes da execução.
3. Garanta que tarefas destrutivas (rm, format) tenham guardas extras.
