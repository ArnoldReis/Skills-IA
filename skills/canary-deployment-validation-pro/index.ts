/**
 * Lógica de divisão de tráfego Canary.
 */
export function getTrafficSplit(percentage: number) {
  // Why: O Canary permite validar se o código funciona em escala real com apenas uma fração do risco.
  return { canary: percentage, stable: 100 - percentage };
}
