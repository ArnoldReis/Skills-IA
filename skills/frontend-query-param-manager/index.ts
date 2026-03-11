/**
 * Utilitário para atualizar parâmetros na URL preservando os existentes.
 */
export function updateQueryParams(currentParams: URLSearchParams, newParams: Record<string, string>): string {
  const params = new URLSearchParams(currentParams);
  Object.entries(newParams).forEach(([key, value]) => {
    if (value) params.set(key, value);
    else params.delete(key);
  });
  return params.toString();
}
