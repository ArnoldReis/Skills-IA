/**
 * Exemplo de canal AsyncAPI.
 */
export const asyncApiChannel = {
  'user/signedup': {
    publish: { message: { $ref: '#/components/messages/UserSignedUp' } } // Why: Fundamental para arquiteturas EDA (Event-Driven Architecture).
  }
};
