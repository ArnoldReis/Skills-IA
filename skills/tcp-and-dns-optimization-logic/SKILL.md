---
name: tcp-and-dns-optimization-logic
description: Otimiza as configurações de rede L3/L4 para reduzir a latência de conexão e acelerar a resolução de nomes.
---
# `tcp-and-dns-optimization-logic`
Espremendo cada milissegundo da pilha de rede.
## Regras
1. Habilite `Keep-Alive` para reutilizar conexões TCP e evitar o custo do handshake em cada requisição.
2. Utilize um cache de DNS local (CoreDNS/dnsmasq) para evitar consultas externas lentas.
3. Ajuste o `TCP Window Size` e habilite `BBR` em servidores Linux para melhorar o throughput em redes de alta latência.
---
