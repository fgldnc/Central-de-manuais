# 📚 Central de Manuais — GBA Financeiro

Sistema interno de documentação do setor financeiro da **Gonçalves Boson Arruda Advogados**, publicado como página estática no GitHub Pages.

---

## 📋 Descrição

A Central de Manuais é uma página web interativa que reúne todos os procedimentos internos do departamento financeiro em um único ponto de acesso. Funciona sem servidor, sem banco de dados e sem dependências externas — tudo em HTML, CSS e JavaScript puro.

---

## ✅ Funcionalidades

- Sidebar lateral com navegação por categorias e manuais
- Botão para ocultar/mostrar a sidebar
- Busca global no conteúdo de todos os manuais
- Destaque visual da palavra pesquisada
- Contador de resultados de busca
- Botão de limpar busca
- Links diretos por manual (âncoras)
- Página inicial com visão geral
- Histórico de alterações
- Identidade visual da GBA (fonte Outfit, cores institucionais)
- Compatível com GitHub Pages (100% estático)

---

## 🗂️ Estrutura de Arquivos

```
central-manuais-gba/
├── index.html        → Página principal com todos os manuais
├── css/
│   └── style.css     → Estilos e identidade visual
├── js/
│   └── script.js     → Interatividade (busca, sidebar, navegação)
├── assets/
│   └── logo.png      → Logo da GBA
└── README.md         → Este arquivo
```

---

## 🚀 Como publicar no GitHub Pages

1. Crie um repositório no GitHub (pode ser privado ou público)
2. Faça o upload de todos os arquivos mantendo a estrutura de pastas acima
3. Vá em **Settings → Pages**
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`
5. Clique em **Save**
6. Aguarde alguns minutos — o GitHub vai gerar uma URL no formato:
   `https://seu-usuario.github.io/nome-do-repositorio/`

> **Repositório privado:** o GitHub Pages com repositório privado requer plano pago (GitHub Pro ou superior). Para uso gratuito, o repositório precisa ser público.

---

## ✏️ Como atualizar os manuais

Todo o conteúdo dos manuais está dentro do arquivo `index.html`. Para adicionar ou editar um manual:

1. Abra o `index.html` em qualquer editor de texto (VS Code, Notepad++, etc.)
2. Localize a seção correspondente pelo comentário `<!-- MANUAL: Nome do Manual -->`
3. Edite o conteúdo dentro da `<div>` correspondente
4. Para **adicionar um novo manual**:
   - Crie uma nova `<div class="manual-section">` com um `id` único
   - Adicione o link correspondente na sidebar (dentro de `<nav>`)
5. Salve o arquivo e faça o commit/upload no GitHub

> **Atenção com e-mails:** todos os e-mails no código usam `&#64;` no lugar de `@` para evitar que o Cloudflare intercepte e quebre a interatividade. Mantenha esse padrão ao adicionar novos contatos.

---

## 🧪 Como testar após alterações

Antes de publicar no GitHub Pages, teste localmente:

1. Abra o `index.html` diretamente no navegador (duplo clique no arquivo)
2. Verifique:
   - A sidebar está carregando corretamente
   - A busca está encontrando e destacando termos
   - Os links da sidebar navegam para as seções corretas
   - O botão de ocultar/mostrar sidebar funciona
   - O botão "Voltar ao topo" aparece ao rolar a página
3. Teste em pelo menos dois navegadores (Chrome e Edge)

---

## ☑️ Checklist antes de publicar

- [ ] Conteúdo dos manuais revisado e atualizado
- [ ] Sidebar com todos os links corretos e sem duplicatas
- [ ] Nenhum e-mail com `@` direto — usar `&#64;` no lugar
- [ ] Nenhuma informação sigilosa exposta (senhas, tokens, dados bancários completos)
- [ ] Logo e assets carregando corretamente
- [ ] Testado localmente no navegador antes do upload
- [ ] Histórico de alterações atualizado com a data e o que foi mudado

---

## ⚠️ Alerta de Segurança e Privacidade

> **Atenção antes de publicar em repositório público.**

Se o repositório for público, qualquer pessoa com o link consegue acessar a Central. Revise o conteúdo e certifique-se de que **não há**:

- Senhas ou credenciais de sistemas
- Dados bancários completos de clientes ou da empresa
- Informações sigilosas de processos jurídicos
- Dados pessoais sensíveis (CPF, documentos)
- Tokens de API ou chaves de acesso

Se precisar manter o acesso restrito, use repositório privado (requer plano pago) ou proteja com autenticação via serviços como Netlify ou Cloudflare Pages.

---

## 🔧 Boas Práticas de Manutenção

- **Atualize o histórico de alterações** sempre que modificar conteúdo — facilita o rastreamento de mudanças
- **Não modifique o JS inline** do `index.html` diretamente; prefira editar o `js/script.js`
- **Mantenha o padrão de IDs únicos** para cada seção de manual — isso garante que os links diretos funcionem
- **Faça backup local** antes de qualquer alteração significativa
- **Documente mudanças grandes** com data e responsável no próprio histórico da Central
- Evite adicionar dependências externas (CDN, frameworks) para garantir que a Central continue funcionando offline e sem manutenção de dependências

---

## 👤 Responsável pelo Projeto

Departamento Financeiro — GBA Advogados  
Manutenção: Fernanda Galdino  
Última atualização: 2026
