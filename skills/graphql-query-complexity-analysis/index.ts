/**
 * Estimador de complexidade GraphQL.
 */
export function getComplexity(query: any) {
  // Why: Impede que um usuário mal-intencionado derrube o servidor enviando uma query com 50 níveis de aninhamento.
  let score = 0;
  // Lógica de parser simplificada para o exemplo
  return score;
}
