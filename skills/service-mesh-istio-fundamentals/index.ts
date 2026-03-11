/**
 * VirtualService Istio (simplificado).
 */
export const virtualService = {
  hosts: ['api-service'],
  http: [{ route: [{ destination: { host: 'api-service', subset: 'v1' } }] }] // Why: Permite deploys Canary e Blue-Green em nível de infra.
};
