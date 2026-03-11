---
name: rbac-role-based-access-control-logic
description: Implementa Controle de Acesso Baseado em Funções (RBAC) para gerenciar permissões de forma hierárquica e escalável.
---
# `rbac-role-based-access-control-logic`
Definindo quem pode fazer o quê no seu sistema.
## Regras
1. Defina `Roles` (ex: Admin, Editor, Viewer) e mapeie permissões atômicas a cada uma delas.
2. Evite checar a Role diretamente no código; em vez disso, cheque a permissão (ex: `can_edit_post`) para maior flexibilidade.
3. Garanta que o sistema suporte o "Princípio do Privilégio Mínimo" (Least Privilege).
---
