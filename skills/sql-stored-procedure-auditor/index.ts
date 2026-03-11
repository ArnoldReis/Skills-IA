/**
 * Template de auditoria JSDoc para SQL.
 */
export function getProcedureMetadata(name: string) {
  return {
    procName: name,
    securityDefiner: false,
    performanceLevel: 'Unknown'
  };
}
