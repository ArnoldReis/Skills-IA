---
name: cqrs-pattern-implementation-pro
description: Implementa a segregação de responsabilidade entre Comandos (escrita) e Consultas (leitura) para otimizar performance.
---
# `cqrs-pattern-implementation-pro`
Especialização de modelos para leitura veloz e escrita íntegra.
## Regras
1. Não utilize o mesmo modelo de banco de dados para salvar dados e gerar relatórios complexos.
2. Utilize "Projeções" para criar visões de dados pré-computadas e otimizadas para a interface do usuário.
3. Aceite a consistência eventual se o sistema de leitura e escrita forem bancos de dados fisicamente separados.
---
