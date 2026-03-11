/**
 * Gera um objeto de variantes padrão para animações de lista (Stagger).
 * @param staggerDuration Tempo entre o início de cada animação de item.
 * @returns Objeto de variantes para uso em motion.div.
 */
export function getStaggerVariants(staggerDuration: number = 0.1): any {
    // Why: O efeito de cascata (stagger) é crucial para uma sensação de "premium" no carregamento de listas.
    return {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: staggerDuration,
            },
        },
    };
}
