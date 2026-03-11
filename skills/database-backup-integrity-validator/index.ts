/**
 * Comando de restore para teste.
 */
export function getRestoreTestCommand(backupFile: string, dbName: string): string {
  // Why: Validar o backup previne a descoberta de arquivos corrompidos apenas no momento de uma crise real.
  return `pg_restore -d \${dbName}_test \${backupFile} && psql -d \${dbName}_test -c "SELECT count(*) FROM users;"`;
}
