/**
 * Experimento de caos: Injeta falha de auth.
 */
export function injectAuthFailure() {
  return { forceReject: true, reason: 'Chaos Experiment' };
}
