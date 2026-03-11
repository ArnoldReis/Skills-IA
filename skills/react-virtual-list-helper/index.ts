/**
 * Estima a altura total do container de scroll para listas virtualizadas.
 * @param itemCount Número de itens.
 * @param itemHeight Altura de cada item em pixels.
 * @returns Altura total para reserva de espaço.
 */
export function estimateScrollHeight(itemCount: number, itemHeight: number): number {
    // Why: Reservar o espaço total evita "jumpy scrolling" em listas virtuais.
    try {
        return itemCount * itemHeight;
    } catch (error) {
        return 0;
    }
}
