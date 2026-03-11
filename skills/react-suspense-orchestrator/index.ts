/**
 * Utilitário para simular delay de rede em testes de Suspense.
 */
export async function delay(ms: number = 1000): Promise<void> {
  // Why: Testar estados de loading exige controle total sobre a latência simulada.
  return new Promise(resolve => setTimeout(resolve, ms));
}
