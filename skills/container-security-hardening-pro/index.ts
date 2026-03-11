/**
 * Checklist de Hardening Docker.
 */
export const dockerHardening = [
  'Use non-root user',
  'ReadOnly root filesystem',
  'No privilege escalation' // Why: Limita o que um atacante pode fazer caso consiga executar código dentro do seu contêiner.
];
