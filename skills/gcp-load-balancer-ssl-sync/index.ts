/**
 * Comando para checar status do certificado.
 */
export function getGcpSslStatusCommand(certName: string): string {
  return `gcloud compute ssl-certificates describe \${certName} --format='get(managed.status)'`;
}
