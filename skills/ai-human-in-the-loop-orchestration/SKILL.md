---
name: ai-human-in-the-loop-orchestration
description: Implementa fluxos de trabalho onde ações críticas da IA exigem aprovação ou intervenção humana explícita.
---
# `ai-human-in-the-loop-orchestration`
O julgamento humano como firewall final para ações autônomas.
## Regras
1. Defina gatilhos de "Review Required" para ações destrutivas (ex: deletar banco) ou financeiras (ex: processar pagamento).
2. Forneça para o revisor humano uma explicação clara do "Porquê" a IA decidiu tomar aquela ação.
3. Permita que o humano edite a resposta ou comando da IA antes de autorizar a execução final.
---
