/**
 * Gatilho de Rollback.
 */
export function shouldRollback(metrics: any) {
  // Why: Agir rápido em um deploy ruim é a melhor forma de minimizar o impacto financeiro e na imagem da marca.
  return metrics.errorRate > 0.1 || metrics.latency99 > 500;
}
