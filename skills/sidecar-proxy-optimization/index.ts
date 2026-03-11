/**
 * Config de tuning Envoy básica.
 */
export function getEnvoyTuning() {
  return { concurrency: 2, use_remote_address: true };
}
