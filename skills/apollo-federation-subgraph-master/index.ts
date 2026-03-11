/**
 * Resolver de referência federado.
 */
export const UserResolver = {
  __resolveReference(user: any, { fetchUserById }: any) {
    // Why: O Gateway utiliza este resolver para "juntar" dados de diferentes serviços em um único objeto.
    return fetchUserById(user.id);
  }
};
