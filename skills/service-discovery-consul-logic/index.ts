/**
 * Registro de serviço.
 */
export async function registerService(name: string, port: number) {
  // Why: Em ambientes de nuvem, IPs mudam constantemente; a descoberta dinâmica é essencial para a estabilidade.
  await consul.agent.service.register({ name, port, check: { http: `http://localhost:\${port}/health`, interval: '10s' } });
}
