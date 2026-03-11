/**
 * Handler de sinal de encerramento (SIGTERM).
 */
export async function handleShutdown(server: any) {
  // Why: Impedir corrupção de dados e erros 502 repentinos durante novas implantações ou reinicializações.
  await server.close();
  process.exit(0);
}
