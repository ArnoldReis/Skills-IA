import { z } from 'zod';

/**
 * Exemplo de schema de configuração.
 */
export const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.string().default('3000'),
  NODE_ENV: z.enum(['development', 'production', 'test'])
});

export function validateEnv() {
  return EnvSchema.parse(process.env);
}
