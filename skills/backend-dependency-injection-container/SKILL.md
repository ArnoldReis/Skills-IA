---
name: backend-dependency-injection-container
description: Implementa o padrão de Injeção de Dependência (DI) para desacoplar classes e facilitar testes.
---
# `backend-dependency-injection-container`
Arquitetura modular e testável.
## Regras
1. Não utilize `new` dentro de classes; receba as instâncias via construtor.
2. Registre todos os serviços e repositórios em um container central.
3. Utilize interfaces para permitir a troca fácil de implementações (ex: DB real por DB mock).
