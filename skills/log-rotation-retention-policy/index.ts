/**
 * Config de retenção recomendada.
 */
export const LOG_RETENTION = {
  hotStorageDays: 15,
  archiveAfterDays: 30, // Why: Reduzir custos de armazenamento sem perder histórico operacional.
  purgeAfterDays: 365
};
