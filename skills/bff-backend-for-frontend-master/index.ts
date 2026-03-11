/**
 * Agregador de dados BFF.
 */
export async function getMobileDashboardData() {
  // Why: Dispositivos móveis se beneficiam de uma única chamada que retorna dados de múltiplos microserviços.
  return {
    profile: await fetch('/profile'),
    notifications: await fetch('/alerts'),
    balance: await fetch('/wallet')
  };
}
