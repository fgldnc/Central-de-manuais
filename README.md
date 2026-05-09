# Central de Manuais — GBA Financeiro

Sistema interno de documentação do setor financeiro da Gonçalves Boson Arruda Advogados, estruturado como página estática para consulta dos manuais do financeiro.

---

## Descrição

A Central de Manuais é uma página web interativa que reúne os procedimentos internos do departamento financeiro em um único ponto de acesso.

O projeto funciona com HTML, CSS e JavaScript puro, sem servidor e sem banco de dados.

A central foi organizada para facilitar a consulta e a manutenção dos manuais, permitindo atualizações pontuais sem precisar recriar o projeto inteiro.

---

## Funcionalidades

- Sidebar lateral com navegação por categorias e manuais
- Botão para ocultar/mostrar a sidebar
- Busca global no conteúdo de todos os manuais
- Destaque visual da palavra pesquisada
- Contador de resultados de busca
- Botão de limpar busca
- Links diretos por manual
- Página inicial com visão geral
- Histórico de alterações
- Identidade visual da GBA
- Fonte Outfit
- Estrutura estática em HTML, CSS e JavaScript

---

## Estrutura de Arquivos

```text
central-manuais-gba/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── logo.png
└── README.md
```

### Função de cada arquivo

```text
index.html
```

Arquivo principal da central. Contém a estrutura da página, sidebar, página inicial, histórico e conteúdo dos manuais.

```text
css/style.css
```

Arquivo responsável pelo visual da central, incluindo cores, tipografia, sidebar, cards, busca e responsividade.

```text
js/script.js
```

Arquivo responsável pela interatividade da central, incluindo busca global, destaque de termos, sidebar, links diretos e botão de voltar ao topo.

```text
assets/logo.png
```

Arquivo da logo utilizada na central.

---

## Como atualizar os manuais

Como o conteúdo dos manuais está no `index.html`, as atualizações de conteúdo devem ser feitas nesse arquivo.

Para evitar retrabalho, o ideal é fazer atualizações pontuais. Sempre informe exatamente qual manual será alterado, qual seção precisa mudar e qual é o novo texto.

Evite pedir para recriar a central inteira.

---

### Atualização pontual de trecho de manual

Use este prompt quando precisar alterar apenas uma frase, parágrafo, orientação ou seção específica de um manual já existente.

```text
ATUALIZAÇÃO PONTUAL DE MANUAL — CENTRAL DE MANUAIS DO FINANCEIRO DA GBA

Estou atualizando apenas um trecho de um manual da Central de Manuais do Financeiro da GBA.

Use como referência o index.html salvo neste Projeto do Claude.

Não vou reenviar todos os arquivos para não pesar o chat.

GOAL:
Atualizar somente o trecho informado do manual abaixo, preservando toda a estrutura da central.

MANUAL A SER ALTERADO:
[Nome do manual]

SEÇÃO A SER ALTERADA:
[Nome da seção, subtítulo ou trecho aproximado]

TEXTO ANTIGO:
[Cole aqui o texto antigo, se tiver]

TEXTO NOVO:
[Cole aqui o texto novo]

REGRAS:
- Alterar apenas esse trecho do manual.
- Não reescrever o manual inteiro.
- Não alterar outros manuais.
- Não alterar sidebar, busca, CSS, JavaScript, README ou assets.
- Não mudar a identidade visual.
- Não adicionar comentários no código.
- Não recriar a central do zero.
- Preservar IDs, classes e estrutura já existentes.
- Preservar links diretos.
- Preservar o funcionamento da busca global.
- Se o nome do manual na sidebar precisar mudar, avisar antes.
- Se a alteração exigir mudança fora do index.html, sinalizar antes e explicar.

FORMATO DA RESPOSTA:
Entregue apenas:
1. resumo do que foi alterado;
2. trecho atualizado do index.html;
3. indicação exata de onde substituir;
4. checklist rápido de teste.
```

---

### Exemplo de atualização pontual

```text
ATUALIZAÇÃO PONTUAL DE MANUAL — CENTRAL DE MANUAIS DO FINANCEIRO DA GBA

Use como referência o index.html salvo neste Projeto do Claude.

GOAL:
Atualizar somente um trecho do Manual de Comissão.

MANUAL A SER ALTERADO:
Manual de Comissão

SEÇÃO A SER ALTERADA:
Prazo de apuração

TEXTO ANTIGO:
A apuração das comissões será realizada até o 5º dia útil do mês.

TEXTO NOVO:
A apuração das comissões será realizada até o 3º dia útil do mês, considerando os recebimentos efetivamente baixados no Omie até o último dia do mês anterior.

REGRAS:
- Alterar apenas esse trecho.
- Não alterar outros manuais.
- Não alterar CSS, JS, README ou assets.
- Não recriar a central.
- Não adicionar comentários no código.

FORMATO DA RESPOSTA:
Entregue apenas o trecho atualizado do index.html e diga exatamente onde substituir.
```

---

### Inclusão de novo manual

Use este prompt quando precisar inserir um manual novo na central.

```text
INCLUSÃO DE NOVO MANUAL — CENTRAL DE MANUAIS DO FINANCEIRO DA GBA

Use como referência o index.html salvo neste Projeto do Claude.

GOAL:
Inserir um novo manual na central, preservando a estrutura atual.

NOVO MANUAL:
[Nome do manual]

CATEGORIA NA SIDEBAR:
[Categoria onde ele deve entrar]

CONTEÚDO DO MANUAL:
[Cole aqui o texto do manual]

REGRAS:
- Criar uma nova seção .ms para o manual.
- Criar um id único e amigável para link direto.
- Inserir o manual na sidebar na categoria correta.
- Preservar busca global, links diretos e estrutura existente.
- Não alterar outros manuais.
- Não alterar CSS, JS, README ou assets.
- Não adicionar comentários no código.

FORMATO DA RESPOSTA:
Entregue:
1. item novo da sidebar;
2. seção completa do novo manual;
3. indicação exata de onde inserir cada trecho;
4. checklist de teste.
```

---

### Atualização por arquivo Word

Use este prompt quando houver um arquivo Word atualizado de um manual que já existe na central.

```text
ATUALIZAÇÃO POR ARQUIVO WORD — CENTRAL DE MANUAIS DO FINANCEIRO DA GBA

Segue um arquivo Word atualizado de um manual já existente.

Use como referência o index.html salvo neste Projeto do Claude.

GOAL:
Comparar o manual em Word enviado com o conteúdo atual do mesmo manual no index.html e atualizar apenas as diferenças necessárias.

REGRAS:
- Atualizar apenas o manual correspondente.
- Não alterar outros manuais.
- Não recriar a central inteira.
- Não alterar CSS, JS, README ou assets.
- Não mudar a identidade visual.
- Não adicionar comentários no código.
- Preservar sidebar, busca global, links diretos e histórico.
- Se houver mudança relevante, atualizar o histórico de alterações.

FORMATO DA RESPOSTA:
Entregue:
1. resumo das diferenças encontradas;
2. trecho atualizado do manual no index.html;
3. item de histórico sugerido, se necessário;
4. checklist de teste.
```

---

### Continuidade em novo chat

Use este prompt quando a conversa ficar longa e for necessário continuar em outro chat dentro do mesmo Projeto do Claude.

```text
CONTINUIDADE DO PROJETO — CENTRAL DE MANUAIS DO FINANCEIRO DA GBA

Estou dando continuidade ao projeto da Central de Manuais do Financeiro da GBA.

Use como referência os arquivos já salvos neste Projeto:
- index.html
- css/style.css
- js/script.js
- assets/logo.png
- README.md

Contexto:
A central é um HTML interativo com os manuais do financeiro da GBA, preparada para consulta dos procedimentos internos.

A central já possui:
- sidebar lateral;
- botão para ocultar/mostrar sidebar;
- busca global no corpo dos manuais;
- destaque visual da palavra pesquisada;
- contador de resultados;
- botão de limpar busca;
- links diretos por manual;
- página inicial;
- histórico simples de alterações;
- identidade visual da GBA;
- fonte Outfit;
- estrutura em HTML, CSS e JavaScript puro.

Regras fixas:
- Não alterar o conteúdo dos manuais sem necessidade.
- Não recriar a central do zero.
- Não mudar a identidade visual.
- Não adicionar comentários no código.
- Não adicionar funcionalidades novas sem pedido.
- Trabalhar por partes.
- Entregar apenas a etapa solicitada.
- Preservar sidebar, busca global, destaque visual, links diretos, histórico e página inicial.

Agora quero continuar a partir da seguinte etapa:
[COLE AQUI A ETAPA ATUAL]
```

---

### Atualização de visual

Use este prompt quando a alteração for apenas no CSS.

```text
AJUSTE VISUAL — CENTRAL DE MANUAIS DO FINANCEIRO DA GBA

Vou enviar apenas o arquivo css/style.css.

GOAL:
Ajustar somente o visual solicitado, preservando a estrutura e as funcionalidades da central.

REGRAS:
- Alterar apenas o css/style.css.
- Não alterar index.html.
- Não alterar js/script.js.
- Não alterar conteúdo dos manuais.
- Não criar funcionalidades novas.
- Não mudar a identidade visual sem solicitação.
- Não adicionar comentários no código.

ALTERAÇÃO DESEJADA:
[Descreva aqui o ajuste visual desejado]

FORMATO DA RESPOSTA:
Entregue:
1. resumo do ajuste;
2. trecho de CSS atualizado;
3. indicação exata de onde substituir;
4. se necessário, o arquivo css/style.css completo.
```

---

### Atualização de interatividade

Use este prompt quando a alteração for apenas no JavaScript.

```text
AJUSTE DE INTERATIVIDADE — CENTRAL DE MANUAIS DO FINANCEIRO DA GBA

Vou enviar apenas o arquivo js/script.js.

GOAL:
Ajustar somente a interatividade solicitada, preservando o conteúdo, visual e estrutura da central.

REGRAS:
- Alterar apenas o js/script.js.
- Não alterar index.html.
- Não alterar css/style.css.
- Não alterar conteúdo dos manuais.
- Não criar funcionalidades novas além do solicitado.
- Não adicionar comentários no código.

ALTERAÇÃO DESEJADA:
[Descreva aqui o ajuste de interatividade desejado]

FORMATO DA RESPOSTA:
Entregue:
1. resumo do ajuste;
2. trecho de JavaScript atualizado;
3. indicação exata de onde substituir;
4. se necessário, o arquivo js/script.js completo.
```

---

## Observação sobre e-mails

Todos os e-mails no código devem usar `&#64;` no lugar de `@`.

Esse padrão evita problemas de interceptação automática por ferramentas externas e ajuda a preservar a interatividade da central.

Ao adicionar novos contatos ou modelos de e-mail, mantenha esse formato.
