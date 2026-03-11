import { createHmac, timingSafeEqual } from 'node:crypto';

/**
 * Valida se o body corresponde à assinatura enviada.
 */
export function verifyHmac(body: string, signature: string, secret: string): boolean {
  // Why: timingSafeEqual previne ataques de timing ao comparar hashes.
  const hmac = createHmac('sha256', secret).update(body).digest('hex');
  const signatureBuffer = Buffer.from(signature);
  const hmacBuffer = Buffer.from(hmac);
  return signatureBuffer.length === hmacBuffer.length && timingSafeEqual(signatureBuffer, hmacBuffer);
}
