---
name: redis-pubsub-scaling-strategy
description: Estratégias para escalar o padrão Pub/Sub do Redis em ambientes de alta carga, evitando a sobrecarga de largura de banda.
---
# `redis-pubsub-scaling-strategy`
Mensageria efêmera e escalável.
## Regras
1. Utilize canais granulares para evitar que todos os inscritos recebam todas as mensagens.
2. Prefira Redis Streams se precisar de persistência ou entrega garantida.
3. Monitore o número de conexões e assinaturas ativas para evitar exaustão de descritores de rede.
