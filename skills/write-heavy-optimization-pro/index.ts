/**
 * Helper de batching para escrita.
 */
export function getBatchConfig(maxSize: number = 1000) {
  return { maxSize, flushIntervalMs: 50 }; // Why: Batching reduz drasticamente os IOPS do disco.
}
