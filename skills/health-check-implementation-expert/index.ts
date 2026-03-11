/**
 * Handler de Readiness.
 */
export async function readinessCheck(db: any) {
   // Why: Readiness impede que o balanceador envie tráfego para um nó que ainda está subindo caches ou bancos.
   const isDbUp = await db.ping();
   return isDbUp ? { status: 'READY' } : { status: 'NOT_READY' };
}
