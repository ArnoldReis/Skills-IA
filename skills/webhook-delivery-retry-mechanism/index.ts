/**
 * Esquema de agendamento de retry para webhook.
 */
export function scheduleWebhookRetry(attempt: number) {
  const delays = [60, 300, 1800, 3600, 86400]; // Why: Webhooks falham por instabilidade temporária do cliente; o retry salva a integração.
  return delays[attempt] || null;
}
