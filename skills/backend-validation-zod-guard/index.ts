import { z } from 'zod';

/**
 * Schema base para IDs de UUID.
 */
export const UuidSchema = z.string().uuid({ message: 'ID deve ser um UUID válido.' });

export function validateId(id: string) {
  return UuidSchema.safeParse(id);
}
