/**
 * Simula uma falha aleatória.
 */
export function injectRandomError(probability: number = 0.05) {
  // Why: Introduzir falhas esporádicas ajuda a validar se as lógicas de retry e fallback estão realmente funcionando.
  if (Math.random() < probability) {
    throw new Error('Chaos Experiment Induced Failure');
  }
}
