/**
 * Retorna objeto de status de saúde.
 */
export function getHealthStatus(dbConnected: boolean) {
  return {
    status: dbConnected ? 'UP' : 'DOWN',
    timestamp: new Date().toISOString(),
    services: { database: dbConnected ? 'connected' : 'disconnected' }
  };
}
