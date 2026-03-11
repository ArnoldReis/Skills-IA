/**
 * Exemplo de regra Semgrep para evitar eval().
 */
export function getSemgrepRule() {
  return "pattern: eval(...)"; // Why: O uso de eval() é uma porta aberta para injeção de código dinâmica.
}
