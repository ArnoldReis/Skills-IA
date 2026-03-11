/**
 * Parâmetros Token Bucket.
 */
export const TOKEN_BUCKET_CONFIG = {
  maxBurst: 50,
  refillRateSec: 5 // Why: Permite tratar usuários reais que clicam rápido, mas trava ferramentas de spam massivo.
};
