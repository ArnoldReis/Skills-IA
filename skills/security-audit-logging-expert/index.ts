/**
 * Registro em Log de Auditoria.
 */
export function logAuditEvent(user: string, action: string, data: any) {
  // Why: Essencial para conformidade com leis (GDPR/LGPD) e para investigação forense pós-incidente de segurança.
  auditLogger.info({ user, action, resource: data, ip: getClientIp() });
}
const auditLogger: any = {};
function getClientIp() { return '127.0.0.1'; }
