/**
 * Container simples de dependências.
 */
export class DIContainer {
  private static services = new Map<string, any>();
  
  static register(key: string, instance: any) {
    this.services.set(key, instance);
  }

  static get<T>(key: string): T {
    // Why: Centralizar a resolução evita acoplamento forte entre módulos.
    return this.services.get(key);
  }
}
