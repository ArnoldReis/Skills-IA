---
name: react-native-performance-optimization
description: Otimiza aplicações React Native focando em taxas de quadro (FPS) estáveis, tempo de inicialização e uso de memória.
---
# `react-native-performance-optimization`
Fluidez nativa em aplicações cross-platform.
## Regras
1. Utilize o `FlashList` da Shopify em vez do `FlatList` padrão para scroll de listas massivas sem perda de frames.
2. Evite renderizações desnecessárias usando `React.memo` e `useMemo` em componentes pesados da UI.
3. Utilize o `Hermes Engine` habilitado para reduzir o tempo de "Time to Interactive" e o tamanho do binário.
---
