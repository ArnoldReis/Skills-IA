/**
 * Exemplo de publicação.
 */
export function publishEvent(topic: string, data: any) {
  // Why: O Pub/Sub permite que novos serviços comecem a reagir a eventos sem mudar uma linha do código original.
  return { topic, payload: data, timestamp: Date.now() };
}
