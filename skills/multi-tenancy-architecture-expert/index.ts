/**
 * Filtro global de tenant.
 */
export function getTenantFilter(tenantId: string) {
  // Why: O isolamento lógico via tenant_id é a forma mais comum e econômica de multi-tenancy.
  return { where: { tenantId } };
}
