/**
 * SQL de Trigger de Auditoria simples.
 */
export function getAuditTriggerSql(table: string): string {
  // Why: Triggers garantem a auditoria mesmo que a alteração venha de fora da aplicação principal (ex: CLI do DBA).
  return `CREATE TRIGGER trg_\${table}_audit AFTER UPDATE OR DELETE ON \${table} FOR EACH ROW EXECUTE FUNCTION audit_func();`;
}
