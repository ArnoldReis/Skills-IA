---
name: svg-react-component-cleaner
description: Transforma SVGs brutos em componentes React otimizados e customizáveis (via props).
---

# `svg-react-component-cleaner`
Especialista em Ícones. Remove lixo de exportação de Softwares de design (Figma/Illustrator) e injeta controle de `currentColor` e `size`.

## Regras
1. Remova atributos fixos de `width` e `height` e substitua por props dinamizáveis.
2. Troque valores hexadecimais fixos de `fill` e `stroke` por `currentColor` para integração com CSS.
3. Utilize `memo` por padrão em SVGs complexos para evitar re-paints de path.

## Como Usar
Sempre que importar um novo ícone ou ilustração para o projeto.
