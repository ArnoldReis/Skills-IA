/**
 * Controle de Release Progressivo.
 */
export function evaluateReleaseStage(user: any) {
  // Why: Permite validar novas ideias com um grupo seleto de usuários antes de liberar para toda a base.
  if (user.isBeta) return 'V2';
  return 'V1';
}
