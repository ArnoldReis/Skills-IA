/**
 * Retorna log de auditoria de versão.
 */
export function getVersionLog(version: string, author: string) {
  return { version, author, timestamp: new Date().toISOString() };
}
