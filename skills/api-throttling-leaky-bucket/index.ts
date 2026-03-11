/**
 * Lógica do algoritmo Leaky Bucket.
 */
export function leakWater(currentLevel: number, rate: number): number {
  // Why: O algoritmo garante que o robô/servidor processe apenas N tarefas por segundo, sem picos.
  return Math.max(0, currentLevel - rate);
}
