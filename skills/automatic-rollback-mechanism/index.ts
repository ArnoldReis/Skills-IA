/**
 * Verificação de promoção de deploy.
 */
export function shouldRollback(errorRate: number, threshold: number = 0.05) {
  // Why: Deploys ruins devem ser removidos o mais rápido possível para minimizar o impacto aos usuários.
  return errorRate > threshold;
}
