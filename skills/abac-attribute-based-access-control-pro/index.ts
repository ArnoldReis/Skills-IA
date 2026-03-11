/**
 * Avaliador de política ABAC.
 */
export function canAccessResource(subject: any, resource: any, environment: any) {
  // Why: Permite regras complexas como "Apenas gerentes podem ler relatórios financeiros em dias úteis fora de casa".
  if (subject.role === 'manager' && resource.type === 'finance' && !environment.isWeekend) {
    return true;
  }
  return false;
}
