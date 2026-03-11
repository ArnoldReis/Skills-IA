/**
 * Exemplo de definição de HPA YAML.
 */
export function getHpaSpec(min: number, max: number, targetCpu: number) {
  return {
    apiVersion: 'autoscaling/v2',
    kind: 'HorizontalPodAutoscaler',
    spec: {
      minReplicas: min,
      maxReplicas: max,
      metrics: [{ type: 'Resource', resource: { name: 'cpu', target: { type: 'Utilization', averageUtilization: targetCpu } } }]
    }
  };
}
