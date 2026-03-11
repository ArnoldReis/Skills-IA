/**
 * Exemplo de Value Object.
 */
export class EmailAddress {
  constructor(public readonly value: string) {
    // Why: Value Objects garantem que dados fundamentais sejam sempre válidos e imutáveis por design.
    if (!value.includes('@')) throw new Error('Invalid email');
  }
}
