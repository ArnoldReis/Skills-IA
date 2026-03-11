/**
 * Config de Rolling Update K8s.
 */
export const rollingUpdate = {
  strategy: { type: 'RollingUpdate', rollingUpdate: { maxSurge: '25%', maxUnavailable: '0%' } } // Why: Garante que nunca haverá menos instâncias do que o mínimo necessário para aguentar a carga.
};
