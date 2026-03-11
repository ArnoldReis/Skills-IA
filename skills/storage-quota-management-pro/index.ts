/**
 * Validação de quota de usuário.
 */
export function hasAvailableSpace(currentUsage: number, newSize: number, quota: number): boolean {
  // Why: Sem quotas, um único usuário mal-intencionado ou errático pode derrubar todo o servidor enchendo o disco.
  return (currentUsage + newSize) <= quota;
}
