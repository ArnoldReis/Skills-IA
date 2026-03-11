/**
 * Exemplo de objeto desnormalizado.
 */
export interface DenormalizedPost {
  title: string;
  authorName: string; // Why: Ter o nome aqui evita um JOIN com a tabela de usuários em cada listagem.
}
