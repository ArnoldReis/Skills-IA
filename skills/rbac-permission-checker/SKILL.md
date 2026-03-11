---
name: rbac-permission-checker
description: Implementa controle de acesso baseado em funções (Role-Based Access Control) para gerenciar permissões de usuários.
---
# `rbac-permission-checker`
Governança de acesso granular e organizada por funções.
## Regras
1. Defina Papéis (Roles) claros (ex: Admin, Editor, Viewer).
2. Verifique permissões no Backend, nunca confie apenas na visibilidade da UI (Frontend).
3. Utilize o padrão de "Permissão Mínima" (Deny by default).
---
