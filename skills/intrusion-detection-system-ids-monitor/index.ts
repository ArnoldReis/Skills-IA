/**
 * Regra Falco básica para escrita em diretório sensível.
 */
export function getFalcoRuleSnippet(): string {
  // Why: Mudanças em /etc/ são um sinal claro de tentativa de escalação de privilégios ou persistência.
  return 'rule: Write below etc, condition: fd.name startswith /etc/ and evt.type = write';
}
