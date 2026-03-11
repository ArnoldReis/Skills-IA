/**
 * Lógica de switch de tráfego.
 */
export function switchTraffic(target: 'blue' | 'green') {
  // Why: Elimina o risco de "metade do site fora do ar" durante o deploy; ou tudo funciona na V2 ou volta para a V1.
  lb.updateWeight(target, 100);
}
const lb: any = { updateWeight: (t: string, w: number) => {} };
