---
name: accessibility-auditor-pro
description: Avalia componentes HTML/React para nível AAA de WCAG, reportando roles e aria-* ausentes.
---

# `accessibility-auditor-pro`
Uma ferramenta agressiva baseada na AST do código para validar se botões perdem o foco ou tabs estão quebrados.

## Regras
1. Em vez de apenas apontar o erro, sempre sugira de volta o File Patched resolvido.
2. Contraste não pode ser inferido do AST sem css. Pule para roles, alt e aria attributes.
3. Se houver `onClick` numa `div`, grite por `role="button"` e `tabIndex=0`.
