/**
 * Comando para ler novas mensagens de um grupo.
 */
export function getRedisStreamReadCmd(group: string, consumer: string, stream: string): string {
  // Why: Streams no Redis oferecem persistência e semântica de grupo que o Pub/Sub simples não possui.
  return `XREADGROUP GROUP \${group} \${consumer} COUNT 10 STREAMS \${stream} >`;
}
