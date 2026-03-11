---
name: react-portal-manager
description: Gerencia modais, tooltips e menus suspensos usando React Portals para evitar conflitos de Z-Index.
---
# `react-portal-manager`
Organização visual fora da hierarquia principal do DOM.
## Regras
1. Renderize componentes Overlay em uma div separada no Root (ex: #portal-root).
2. Gerencie o foco do teclado automaticamente quando um modal for aberto.
3. Suporte o fechamento ao pressionar a tecla `Esc`.
