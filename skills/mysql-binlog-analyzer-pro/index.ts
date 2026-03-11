/**
 * Comando de leitura de binlog.
 */
export function getBinlogReadCommand(logFile: string): string {
  // Why: Analisar o binlog permite identificar quem e quando alterou um dado crítico sem triggers.
  return `mysqlbinlog --base64-output=DECODE-ROWS -v \${logFile}`;
}
