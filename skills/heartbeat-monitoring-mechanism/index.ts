/**
 * Emissor de sinal de vida.
 */
export function sendHeartbeat(workerId: string) {
  // Why: Workers que processam filas podem travar silenciosamente sem derrubar o container.
  return { status: 'ALIVE', workerId, uptime: process.uptime() };
}
