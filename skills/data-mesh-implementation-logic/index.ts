/**
 * Metadata de Data Product.
 */
export function getDataProductSpec(domain: string) {
  return {
    owner: domain,
    outputPorts: ['sql', 's3-json'],
    qualityScore: 0.95
  };
}
