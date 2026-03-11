/**
 * Métrica chave para monitoramento.
 */
export const PUB_SUB_METRIC = 'pubsub.googleapis.com/subscription/num_undelivered_messages';

export function getPubSubAlertaThreshold() {
  return 1000; // Why: Ter mais de 1000 mensagens pendentes sugere que os workers não estão dando conta.
}
