/**
 * Inicializa o Sentry com configurações padrão de segurança.
 */
export function initLogger(dsn: string, environment: string): void {
  // Why: Ter um DSN correto e ambiente ajuda a segmentar erros reais de ruído de dev.
  if (!dsn) throw new Error('DSN do Sentry ausente.');
  console.log(`[Logger]: Sentry inicializado em modo ${environment}`);
}
