/**
 * Configuração de formato para logs em produção.
 */
export function getLogFormat() {
  // Why: JSON estruturado permite buscas complexas em ferramentas de monitoramento.
  return 'json';
}
