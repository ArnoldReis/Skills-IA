---
name: web-vitals-realtime-monitor
description: Monitora e relata métricas de Core Web Vitals (LCP, FID, CLS) em tempo real.
---

# `web-vitals-realtime-monitor`
Guardião da experiência do usuário. Conecta métricas técnicas de performance diretamente a feedbacks visuais para o desenvolvedor.

## Regras
1. Ouça os eventos de métricas nativos do navegador (`PerformanceObserver`).
2. Agrupe métricas por tempo de sessão e reporte anomalias (ex: CLS > 0.1).
3. Forneça dicas automáticas de correção baseadas no tipo de falha (ex: LCP lento -> Verificar compressão de imagem).

## Como Usar
Excelente para ser injetado durante o desenvolvimento para garantir que novas funcionalidades não quebrem o SEO e a Usabilidade.
