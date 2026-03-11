/**
 * Definição de regras de ingress seguras.
 */
export function getSubnetSecurityRules() {
  return [
    { fromPort: 443, toPort: 443, protocol: 'tcp', cidr: '0.0.0.0/0' }, // Public 
    { fromPort: 5432, toPort: 5432, protocol: 'tcp', sourceGroup: 'app-tier' } // Internal Only
  ];
}
