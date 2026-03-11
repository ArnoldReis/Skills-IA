/**
 * Template de Application ArgoCD.
 */
export const argoApp = {
  apiVersion: 'argoproj.io/v1alpha1',
  kind: 'Application',
  metadata: { name: 'my-app' },
  spec: { syncPolicy: { automated: { selfHeal: true, prune: true } } } // Why: Garante que o Git seja a única fonte da verdade para o estado da aplicação.
};
