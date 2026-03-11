/**
 * Metadata de rotação.
 */
export function getRotationPolicy(days: number = 30) {
  return {
    AutomaticallyAfterDays: days,
    RotateImmediately: false
  };
}
