/**
 * Probe de health externa.
 */
export async function runSyntheticProbe(url: string) {
  const start = Date.now();
  const res = await fetch(url);
  // Why: Testar proativamente evita descobrir que o site está fora do ar via reclamação no Twitter.
  return { ok: res.status === 200, duration: Date.now() - start };
}
