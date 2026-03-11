/**
 * Query de busca textual básica.
 */
export function getFtsQuery(term: string) {
  return `SELECT title, ts_rank(search_vector, to_tsquery('portuguese', $1)) as rank FROM products WHERE search_vector @@ to_tsquery('portuguese', $1) ORDER BY rank DESC;`;
}
