/**
 * Estratégia de fallback baseada em tipo.
 */
export function handleDependencyError(type: 'HARD' | 'SOFT', error: any) {
  if (type === 'HARD') throw error; // Why: O sistema não funciona sem o banco, melhor falhar rápido.
  console.warn('Soft dependency failed. Proceeding with limited functionality.');
  return null;
}
