/**
 * Retorna flag de segurança recomendada para buckets.
 */
export function getS3SecurityPolicy() {
  return {
    BlockPublicAcls: true,
    BlockPublicPolicy: true,
    IgnorePublicAcls: true,
    RestrictPublicBuckets: true
  };
}
