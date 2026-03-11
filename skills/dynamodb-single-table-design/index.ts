/**
 * Helper para formatar chaves compostas.
 */
export function formatDynamoKey(type: string, id: string): string {
  // Why: Padronizar chaves (ex: USER#123) permite buscas polimórficas eficientes na mesma tabela.
  return `\${type.toUpperCase()}#\${id}`;
}
