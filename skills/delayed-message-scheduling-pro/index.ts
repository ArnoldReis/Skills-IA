/**
 * Agendamento de tarefa futura.
 */
export async function scheduleInFuture(task: any, delayMs: number) {
  // Why: Útil para disparar fluxos de "Boas Vindas" 24h após o cadastro sem manter o servidor ocupado esperando.
  return await queue.add(task, { delay: delayMs });
}
