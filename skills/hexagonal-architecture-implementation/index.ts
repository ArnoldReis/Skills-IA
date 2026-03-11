/**
 * Exemplo de Porta de Saída (Output Port).
 */
export interface UserRepositoryPort {
  // Why: A aplicação define o contrato, e o banco (infra) se adapta a ele, permitindo trocas fáceis de tecnologia.
  save(user: any): Promise<void>;
}
