/**
 * Estrutura de entrada de auditoria.
 */
export interface AuditEntry {
  userId: string;
  action: string;
  oldValue?: any;
  newValue: any;
  createdAt: string;
}

export function createAuditRecord(userId: string, action: string, newValue: any): AuditEntry {
  return { userId, action, newValue, createdAt: new Date().toISOString() };
}
