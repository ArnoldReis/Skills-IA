/**
 * Exemplo de regra de destino (VirtualService).
 */
export function getIstioWeightConfig(v1: number, v2: number) {
  return [
    { destination: { host: 'app', subset: 'v1' }, weight: v1 },
    { destination: { host: 'app', subset: 'v2' }, weight: v2 }
  ];
}
