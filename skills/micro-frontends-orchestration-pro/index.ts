/**
 * Config de Module Federation.
 */
export const federationConfig = {
  name: 'host_app',
  remotes: {
    cart: 'cart@http://localhost:3001/remoteEntry.js'
  }
};
