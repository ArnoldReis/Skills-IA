/**
 * Exemplo de busca segura.
 */
export function getSafeQuery(id: string) {
  // Why: Parametrizar a query garante que o banco trate a entrada como dado, não como comando executável.
  return {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [id]
  };
}
