/**
 * Lista de regras WAF básicas.
 */
export function getWafCoreRules() {
  return [
    { name: 'BlockSqlInjection', action: 'BLOCK' },
    { name: 'BlockXss', action: 'BLOCK' },
    { name: 'RateLimitLogin', action: 'COUNT' }
  ];
}
