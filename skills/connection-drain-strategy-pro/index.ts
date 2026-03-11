/**
 * Status de drenagem.
 */
export function getDrainStatus() {
  return { status: 'DRAINING', acceptNew: false }; // Why: Permite manutenções planejadas com 100% de disponibilidade para o usuário.
}
