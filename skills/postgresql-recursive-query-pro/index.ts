/**
 * Gera exemplo de query recursiva para categorias.
 */
export function getRecursiveCategoryQuery() {
  // Why: CTEs recursivas são a forma mais eficiente de buscar todos os filhos de um nó em uma única consulta.
  return `
WITH RECURSIVE CategoryTree AS (
  SELECT id, name, parent_id FROM categories WHERE id = $1
  UNION ALL
  SELECT c.id, c.name, c.parent_id FROM categories c
  INNER JOIN CategoryTree ct ON ct.id = c.parent_id
)
SELECT * FROM CategoryTree;
  `.trim();
}
