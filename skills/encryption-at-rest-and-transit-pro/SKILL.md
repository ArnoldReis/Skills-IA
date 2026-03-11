---
name: encryption-at-rest-and-transit-pro
description: Implementa criptografia de dados em repouso (banco de dados/disco) e em trânsito (rede) usando algoritmos modernos.
---
# `encryption-at-rest-and-transit-pro`
Blindagem total dos dados contra acessos físicos ou interceptações de rede.
## Regras
1. Utilize TLS 1.3 para todos os dados em trânsito; desabilite versões antigas (SSLv3, TLS 1.0).
2. Para dados em repouso, utilize AES-256-GCM ou similar para garantir confidencialidade e integridade.
3. Gerencie as chaves de criptografia em um HSM (Hardware Security Module) ou serviço gerenciado de chaves (KMS).
---
