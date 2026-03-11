/**
 * Valida cardinalidade da chave.
 */
export function isGoodShardingKey(uniqueValues: number, totalRecords: number): boolean {
  // Why: Uma chave com baixa cardinalidade (ex: gênero) causaria uma distribuição de dados muito desigual.
  return (uniqueValues / totalRecords) > 0.1;
}
