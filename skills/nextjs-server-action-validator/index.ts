import { z } from 'zod';

/**
 * Helper para validar dados em Server Actions.
 */
export async function validateActionData<T>(schema: z.Schema<T>, formData: FormData): Promise<T> {
  const rawData = Object.fromEntries(formData.entries());
  return schema.parse(rawData);
}
