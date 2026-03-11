/**
 * Comando de detecção de diferenças simples.
 */
export function getDriftCheckCommand(): string {
  // Why: Mudanças manuais na nuvem (Click-ops) quebram a automação e dificultam recuperações de desastre.
  return `terraform plan -detailed-exitcode`;
}
