/**
 * Exemplo de extensão de tipo federado.
 */
export const typeDefs = `
  extend type User @key(fields: "id") {
    id: ID! @external
    reviews: [Review]
  }
`;
