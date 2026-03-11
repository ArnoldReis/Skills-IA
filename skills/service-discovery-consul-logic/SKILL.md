---
name: service-discovery-consul-logic
description: Implementa mecanismos de descoberta de serviços usando HashiCorp Consul para localização dinâmica de instâncias na rede.
---
# `service-discovery-consul-logic`
Encontrando serviços em uma infraestrutura dinâmica e efêmera.
## Regras
1. Registre cada nova instância de serviço no Consul no momento da inicialização com seus dados de rede (IP/Porta).
2. Utilize verificações de saúde (Health Checks) para remover automaticamente instâncias mortas do catálogo.
3. Utilize DNS ou a API do Consul para buscar o endereço de outros serviços, evitando endereços IP hardcoded.
---
