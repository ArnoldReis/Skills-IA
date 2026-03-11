/**
 * Gera hash de integridade para log.
 */
export function signLogEntry(content: string, secret: string): string {
  // Why: Se um atacante alterar o log, a assinatura não baterá, revelando a fraude.
  return require('crypto').createHmac('sha256', secret).update(content).digest('hex');
}
