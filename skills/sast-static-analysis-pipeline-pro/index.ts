/**
 * Config de hook pré-commit para análise estática.
 */
export const sastConfig = {
  scanOnPush: true,
  criticalThreshold: 0, // Why: Segurança não deve ser opcional; bugs críticos devem impedir o deploy imediatamente.
  severityLevels: ['HIGH', 'CRITICAL']
};
