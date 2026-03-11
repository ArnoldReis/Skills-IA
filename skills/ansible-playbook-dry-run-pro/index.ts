/**
 * Retorna comando seguro de execução Ansible.
 */
export function getAnsibleDryRunCommand(playbook: string): string {
  // Why: Testar a mudança antes de aplicar evita quebras de ambiente de produção por typos.
  return `ansible-playbook ${playbook} --check --diff`;
}
