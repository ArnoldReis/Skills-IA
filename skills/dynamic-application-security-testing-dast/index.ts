/**
 * Comando básico de varredura DAST.
 */
export function getDastCommand(url: string) {
  return `zap-full-scan.py -t \${url}`;
}
