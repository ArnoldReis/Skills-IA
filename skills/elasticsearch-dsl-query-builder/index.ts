/**
 * Retorna query de busca básica com fuzziness.
 */
export function getElasticSearchQuery(term: string) {
  return {
    query: {
      match: {
        title: { query: term, fuzziness: 'AUTO' }
      }
    }
  };
}
