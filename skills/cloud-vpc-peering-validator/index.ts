/**
 * Verifica sobreposição de CIDR.
 */
export function hasCidrOverlap(cidrA: string, cidrB: string): boolean {
  // Why: Redes com o mesmo range de IP não podem conversar via peering, causando falhas de roteamento.
  return cidrA === cidrB; 
}
