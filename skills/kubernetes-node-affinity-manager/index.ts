/**
 * Exemplo de especificação de afinidade.
 */
export function getNodeAffinitySpec(key: string, value: string) {
  return {
    nodeAffinity: {
      requiredDuringSchedulingIgnoredDuringExecution: {
        nodeSelectorTerms: [{ matchExpressions: [{ key, operator: 'In', values: [value] }] }]
      }
    }
  };
}
