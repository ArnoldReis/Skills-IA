/**
 * Filtro básico de tenant para buscas.
 */
export function applyTenantFilter(where: any, tenantId: string) {
  // Why: Forçar o tenantId no filtro `where` previne o vazamento de dados entre clientes diferentes (Leaking).
  return { ...where, tenantId };
}
