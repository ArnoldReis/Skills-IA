/**
 * Retorna o status de saúde de uma métrica Web Vital com base nos thresholds do Google.
 * @param metricName 'LCP' | 'FID' | 'CLS'.
 * @param value Valor numérico da métrica.
 * @returns 'good' | 'needs-improvement' | 'poor'.
 */
export function evaluateVitalHealth(metricName: 'LCP' | 'FID' | 'CLS', value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds = {
        LCP: { good: 2500, poor: 4000 },
        FID: { good: 100, poor: 300 },
        CLS: { good: 0.1, poor: 0.25 }
    };

    try {
        const threshold = thresholds[metricName];
        if (value <= threshold.good) return 'good';
        if (value > threshold.poor) return 'poor';
        return 'needs-improvement';
    } catch (error) {
        throw new Error('Falha ao avaliar métrica de performance.');
    }
}
