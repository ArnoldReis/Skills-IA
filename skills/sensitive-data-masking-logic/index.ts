/**
 * Redator de dados sensíveis.
 */
export function maskCreditCard(number: string) {
  // Why: Previne que desenvolvedores ou operadores de sistema visualizem dados financeiros reais nos logs de erro.
  return number.replace(/\d(?=\d{4})/g, '*');
}
