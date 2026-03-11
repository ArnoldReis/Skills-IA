/**
 * Exemplo de definição de política JSON simples.
 */
export function getAzurePolicyResource() {
  return {
    if: { field: 'location', notIn: ['eastus', 'brazilsouth'] },
    then: { effect: 'deny' }
  };
}
