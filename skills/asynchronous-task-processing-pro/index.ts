/**
 * Producer de job assíncrono.
 */
export async function queueCriticalTask(payload: any) {
  // Why: Manter o tempo de resposta da API sob controle é vital para a experiência do usuário.
  return await jobQueue.add('process-video', payload);
}
