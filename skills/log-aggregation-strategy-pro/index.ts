/**
 * Exemplo de formato de log unificado.
 */
export function formatLogEntry(level: string, message: string) {
  return {
    timestamp: new Date().toISOString(),
    level,
    service: 'api-gateway',
    message
  };
}
