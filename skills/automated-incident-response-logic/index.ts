/**
 * Despachante de resposta automática.
 */
export async function triggerAutoFix(alertType: string) {
  // Why: Resolver problemas conhecidos automaticamente reduz drasticamente o MTTR e a fadiga do alerta.
  if (alertType === 'DISK_FULL') return await cleanTmpDir();
  return null;
}
