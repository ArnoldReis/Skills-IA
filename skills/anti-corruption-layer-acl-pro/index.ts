/**
 * Tradutor de domínio legado para novo.
 */
export function mapLegacyUser(legacyData: any) {
  // Why: A ACL impede que nomes de campos ruins ou lógicas tortas do legado poluam o novo sistema.
  return {
    id: legacyData.USR_ID_INT_99,
    email: legacyData.MAIL_ADR
  };
}
