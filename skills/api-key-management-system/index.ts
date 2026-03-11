import { randomBytes } from 'node:crypto';

/**
 * Gera uma nova API Key segura.
 */
export function generateApiKey(prefix: string = 'ak'): string {
  const bytes = randomBytes(24).toString('hex');
  return `${prefix}_${bytes}`;
}
