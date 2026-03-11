/**
 * Filtro de segredos em logs de CI.
 */
export function sanitizeLog(content: string) {
  // Why: Impede que chaves de API ou senhas acidentalmente impressas no console fiquem visíveis no histórico de builds.
  return content.replace(/sk_[a-zA-Z0-9]+/g, '***REDACTED***');
}
