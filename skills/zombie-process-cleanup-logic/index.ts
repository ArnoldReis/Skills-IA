/**
 * Verificação de idade do processo.
 */
export function isZombieCandidate(pid: number, startTime: number) {
  const maxAgeMs = 3600000; // 1 hora
  return (Date.now() - startTime) > maxAgeMs; // Why: Processos muito longos e inativos indicam travamentos ou perdas de controle.
}
