/**
 * Comando de restauração PITR.
 */
export function getPitrCommand(targetTime: string) {
  // Why: O PITR permite reverter erros humanos desastrosos (como um DELETE sem WHERE) com precisão cirúrgica.
  return `pg_restore --target-time="\${targetTime}"`;
}
