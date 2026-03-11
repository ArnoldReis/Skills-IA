---
name: sidecar-proxy-optimization
description: Otimiza configurações de proxy sidecar (como Envoy) para reduzir o overhead de rede e latência de microserviços.
---
# `sidecar-proxy-optimization`
Máxima performance na malha de serviços invisível.
## Regras
1. Minimize o número de filtros carregados no pipeline do Envoy para reduzir o processamento por requisição.
2. Utilize protocolos binários (como gRPC) para a comunicação entre a aplicação e o seu Sidecar.
3. Configure buffers de rede e timeouts ajustados à realidade de baixa latência da rede local do cluster.
---
