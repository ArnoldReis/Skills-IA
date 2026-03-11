/**
 * Config de Análise Canary.
 */
export const canaryConfig = {
  threshold: 5, // 5% de erro max
  interval: '1m',
  stepWeight: 10 // Why: Automação remove o viés humano e o risco de fadiga durante deploys críticos.
};
