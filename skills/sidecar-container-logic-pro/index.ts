/**
 * Exemplo de definição de Sidecar (K8s style).
 */
export function getSidecarContainerConfig(image: string) {
  return {
    name: 'security-sidecar',
    image,
    ports: [{ containerPort: 9000 }]
  };
}
