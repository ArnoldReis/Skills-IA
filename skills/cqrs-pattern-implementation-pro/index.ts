/**
 * Contratos de Comando e Query.
 */
export interface Command { type: 'WRITE' }
export interface Query { type: 'READ' }
// Why: Separar caminhos de código permite escalar a leitura (geralmente mais frequente) de forma independente da escrita.
