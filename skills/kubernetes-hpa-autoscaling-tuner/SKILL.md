---
name: kubernetes-hpa-autoscaling-tuner
description: Configura e calibra o Horizontal Pod Autoscaler (HPA) baseado em métricas de CPU, RAM e tráfego.
---
# `kubernetes-hpa-autoscaling-tuner`
Elasticidade inteligente para seu cluster.
## Regras
1. Defina o threshold de utilização (ex: 70%) para disparar o escalonamento.
2. Utilize o Metrics Server para fornecer dados precisos ao HPA.
3. Configure o 'scaleDown' delay para evitar o efeito "thrashing" (subir e descer rápido demais).
