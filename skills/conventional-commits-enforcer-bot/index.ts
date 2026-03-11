/**
 * Regex de validação de commit.
 */
export const commitRegex = /^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,50}/; // Why: Padroniza o histórico, permitindo que ferramentas gerem CHANGELOGs automáticos.
