/**
 * Sugere prefixo de query com label.
 */
export function getCypherBaseMatch(label: string): string {
  return `MATCH (n:\${label}) WHERE n.id = $id RETURN n`;
}
