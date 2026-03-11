/**
 * Retorna filtro de erro comum para busca.
 */
export function getErrorFilterPattern(): string {
  return '{ $.status = "ERROR" || $.level = "CRITICAL" }';
}
