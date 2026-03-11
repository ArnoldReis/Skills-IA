/**
 * Parâmetros Leaky Bucket.
 */
export const LEAKY_BUCKET_CONFIG = {
  capacity: 100,
  leakRatePerSec: 10 // Why: Garante que o backend receba no máximo 10 requisições por segundo, suavizando rajadas.
};
