/**
 * Comando de switch de tráfego.
 */
export function switchEnvironment(target: 'BLUE' | 'GREEN') {
  // Why: O switch atômico no balanceador elimina o tempo de inatividade durante a atualização.
  return `LoadBalancer: set upstream to \${target}`;
}
