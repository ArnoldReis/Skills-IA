/**
 * Gera um schema base Zod para validação de formulário de contato.
 * @returns Código string do schema.
 */
export function generateContactSchema(): string {
    // Why: Validação centralizada previne que payloads inválidos cheguem à API, economizando processamento.
    return `
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  message: z.string().max(500, 'Mensagem muito longa'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
    `.trim();
}
