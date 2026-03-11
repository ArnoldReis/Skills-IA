/**
 * Formatação de mensagem SSE.
 */
export function formatSSE(data: any) {
  // Why: SSE é ideal para dashboards e feeds que só precisam receber dados, sem a complexidade do WebSocket.
  return `data: \${JSON.stringify(data)}\\n\\n`;
}
