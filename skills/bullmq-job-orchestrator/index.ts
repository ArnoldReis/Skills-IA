/**
 * Configuração de retry padrão para BullMQ.
 */
export function getJobRetryConfig() {
  // Why: Um backoff exponencial previne que falhas temporárias (ex: API de email fora) gastem os retries muito depressa.
  return { attempts: 5, backoff: { type: 'exponential', delay: 1000 } };
}
