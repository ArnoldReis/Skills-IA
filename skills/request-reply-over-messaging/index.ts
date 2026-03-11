/**
 * Envelope de Request-Reply.
 */
export function createRequestMessage(payload: any, replyQueue: string) {
  return {
    correlationId: Math.random().toString(36).substring(7), // Why: Permite ao produtor identificar qual resposta pertence a qual pergunta.
    replyTo: replyQueue,
    data: payload
  };
}
