/**
 * Envio rápido (Fire and Forget).
 */
export function sendFast(msg: any) {
  // Why: Em telemetria de alta frequência, é melhor perder um ponto de dado do que atrasar o sistema principal.
  socket.emit('telemetry', msg);
}
