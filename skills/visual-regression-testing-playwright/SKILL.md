---
name: visual-regression-testing-playwright
description: Implementa testes de regressão visual usando Playwright para garantir que mudanças de código não quebrem o layout inesperadamente.
---
# `visual-regression-testing-playwright`
Garantindo a integridade visual da interface pixel por pixel.
## Regras
1. Utilize `toMatchSnapshot()` para comparar capturas de tela atuais com versões de referência (baselines) aprovadas.
2. Defina um limite de variação de pixels (Threshold) aceitável (ex: 0.1%) para evitar falhas por renderização de fontes menores.
3. Mascare elementos dinâmicos (datas, nomes de usuário) antes da captura para evitar falsos positivos nos testes.
---
