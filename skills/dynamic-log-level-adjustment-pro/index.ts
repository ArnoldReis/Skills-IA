/**
 * Switch dinâmico de log.
 */
export function setLogLevel(level: 'DEBUG' | 'INFO') {
  // Why: Depurar um problema intermitente em produção sem precisar de um novo deploy ou reinício do servidor.
  logger.level = level;
  console.log(`Log level adjusted to: \${level}`);
}
