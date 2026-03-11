---
name: service-discovery-mechanism-pro
description: Implementa descoberta dinâmica de serviços (Consul, Eureka) para que serviços se encontrem na rede sem IPs fixos.
---
# `service-discovery-mechanism-pro`
Navegação dinâmica em infraestruturas efêmeras.
## Regras
1. Registre o serviço automaticamente ao subir; remova-o ao desligar (Self-Registration).
2. Utilize verificação de saúde (Health Checks) para garantir que o balanceador não direcione tráfego para serviços mortos.
3. Utilize DNS interno ou Sidecars para abstrair o endpoint real do serviço buscado.
---
