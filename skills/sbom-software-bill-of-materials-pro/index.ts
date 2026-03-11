/**
 * Metadados de um SBOM.
 */
export const sbomMetadata = {
  format: 'CycloneDX',
  version: '1.4',
  componentType: 'application' // Why: Permite resposta rápida a incidentes globais de segurança identificando se usamos a lib afetada.
};
