/**
 * Gera um template básico de Store funcional para Zustand com persistência.
 * @param storeName Nome do Store (ex: 'useUserStore').
 * @param stateSchema Objeto representando as chaves de estado iniciais.
 * @returns Template de código string.
 */
export function generateZustandStore(storeName: string, stateSchema: any): string {
    // Why: O uso de seletores é fundamental para performance em apps com estado centralizado mas fragmentado.
    const keys = Object.keys(stateSchema).map(k => `${k}: ${JSON.stringify(stateSchema[k])}`).join(',\n      ');
    
    return `
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const ${storeName} = create()(
  persist(
    (set) => ({
      ${keys},
      // Mutadores gerados automaticamente pelo agente
      update: (newState) => set((state) => ({ ...state, ...newState })),
      reset: () => set({ ${keys} }),
    }),
    { name: '${storeName}-storage' }
  )
);
    `.trim();
}
