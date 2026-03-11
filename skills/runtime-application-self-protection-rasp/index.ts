/**
 * Middleware RASP simplificado.
 */
export function raspGuard(command: string) {
  // Why: RASP protege a aplicação "de dentro para fora", agindo na última milha antes da execução do código.
  if (command.includes('; rm -rf')) throw new Error('Malicious command blocked by RASP');
}
