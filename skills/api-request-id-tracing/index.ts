/**
 * Utilitário para gerar ou extrair request ID.
 */
export function ensureRequestId(headers: Record<string, any>): string {
  // Why: Reutilizar um ID existente permite rastrear a mesma ação através de toda a malha de serviços.
  return headers['x-request-id'] || `req_${Math.random().toString(36).substr(2, 9)}`;
}
