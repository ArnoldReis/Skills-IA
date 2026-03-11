/**
 * Sugere limites padrão de CPU/RAM para K8s.
 */
export function getK8sResourceDefaults() {
  // Why: Sem limites definidos, um pod com vazamento de memória pode comprometer todo o nó do cluster.
  return {
    limits: { cpu: '500m', memory: '512Mi' },
    requests: { cpu: '100m', memory: '128Mi' }
  };
}
