/**
 * Exemplo de busca com hint.
 */
export function getQueryWithHint(collection: any, indexName: string) {
  // Why: Em certas situações, o motor do Mongo escolhe um índice ruim; o hint corrige isso imediatamente.
  return collection.find({ status: 'active' }).hint(indexName);
}
