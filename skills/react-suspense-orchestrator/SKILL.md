---
name: react-suspense-orchestrator
description: Gerencia carregamentos assíncronos e estados de Skeleton usando React Suspense.
---
# `react-suspense-orchestrator`
Melhora a percepção de velocidade da aplicação.
## Regras
1. Envolva listas e imagens pesadas em `<Suspense>`.
2. Projete fallbacks que mantenham o layout estável (Skeletons).
3. Utilize `useTransition` para evitar travamentos de UI em filtros pesados.
