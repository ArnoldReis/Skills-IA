/**
 * Definição de Resolver de Subscription.
 */
export const Resolvers = {
  Subscription: {
    newNotification: {
      subscribe: () => pubsub.asyncIterator(['NOTIFICATION_ADDED']) // Why: Implementa reatividade baseada em eventos de forma nativa no GraphQL.
    }
  }
};
