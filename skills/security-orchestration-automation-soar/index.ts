/**
 * Exemplo de passo de automação SOAR.
 */
export function triggerQuarantine(serverId: string) {
  // Why: Isolar um servidor imediatamente via API corta a comunicação do atacante lateralmente.
  console.log(`Isolating server: \${serverId}`);
  return { status: 'Isolated' };
}
