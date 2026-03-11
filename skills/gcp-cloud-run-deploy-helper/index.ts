/**
 * Comando gcloud para deploy rápido.
 */
export function getGcpDeployCommand(image: string, service: string): string {
  return `gcloud run deploy \${service} --image \${image} --platform managed --allow-unauthenticated`;
}
