/**
 * Stream do servidor.
 */
export function listLogs(call: any) {
  // Why: Útil para logs, notificações ou qualquer dado que venha em pedaços e não caiba em uma única resposta.
  call.write({ message: 'Chunk 1' });
  call.write({ message: 'Chunk 2' });
  call.end();
}
