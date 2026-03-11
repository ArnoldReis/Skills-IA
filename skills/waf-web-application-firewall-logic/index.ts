/**
 * Regra de WAF personalizada.
 */
export const wafRule = {
  name: 'BlockScrapers',
  statement: {
    byteMatchStatement: { fieldToMatch: { singleHeader: { name: 'User-Agent' } }, positionalConstraint: 'CONTAINS', searchString: 'Go-http-client' }
  },
  action: { block: {} } // Why: Bloqueia bots de varredura antes mesmo que eles cheguem ao seu servidor de aplicação.
};
