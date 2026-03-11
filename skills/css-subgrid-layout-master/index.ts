/**
 * Estilo Subgrid CSS.
 */
export const subgridStyles = `
  .parent { display: grid; grid-template-columns: repeat(3, 1fr); }
  .child { grid-column: span 3; display: grid; grid-template-columns: subgrid; }
`; // Why: Subgrid permite que componentes filhos herdem a estrutura de colunas do pai, garantindo alinhamento visual perfeito.
