/**
 * Verificação de contrato Spec-first.
 */
export function validateAgainstSpec(payload: any, schema: any) {
  // Why: Garantir que a implementação segue o que foi prometido aos clientes e parceiros externos.
  return validator.validate(payload, schema);
}
