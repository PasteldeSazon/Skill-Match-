# 🚀 SkillMatch++ – Sistema Inteligente de Compatibilidade entre Candidatos e Vagas

## 📖 Sobre o projeto

O **SkillMatch++** é uma aplicação web desenvolvida utilizando **HTML5, CSS3 e JavaScript (ES Modules)** com o objetivo de auxiliar candidatos a identificar as vagas de emprego mais compatíveis com seu perfil profissional.

O sistema recebe as informações fornecidas pelo usuário em um formulário, compara suas habilidades com os requisitos de diversas vagas disponíveis e apresenta as oportunidades mais adequadas, exibindo uma porcentagem de compatibilidade, habilidades atendidas, habilidades que precisam ser desenvolvidas e uma recomendação personalizada.

O projeto foi desenvolvido como atividade prática da disciplina de Desenvolvimento Web, utilizando apenas tecnologias nativas da Web, sem frameworks ou bibliotecas externas.

---

# ❗ Problema que o sistema resolve

Encontrar uma vaga compatível com o perfil profissional pode ser uma tarefa difícil, principalmente para candidatos iniciantes.

O SkillMatch++ busca resolver esse problema realizando automaticamente uma comparação entre as habilidades do candidato e os requisitos das vagas cadastradas, facilitando a identificação das melhores oportunidades e indicando quais competências ainda precisam ser desenvolvidas.

---

# 🎯 Objetivos do projeto

- Aplicar HTML semântico e acessível.
- Desenvolver uma interface responsiva seguindo o conceito **Mobile First**.
- Utilizar JavaScript moderno com ES Modules.
- Aplicar conceitos de Programação Orientada a Objetos (POO).
- Consumir dados externos utilizando Fetch API.
- Persistir informações utilizando LocalStorage.
- Desenvolver lógica de compatibilidade entre candidatos e vagas.
- Organizar o código em módulos para facilitar manutenção e reutilização.

---

# ✨ Funcionalidades

- Cadastro do candidato.
- Validação completa dos campos do formulário utilizando JavaScript e Expressões Regulares (Regex).
- Carregamento das vagas através de arquivo JSON utilizando Fetch API.
- Tratamento de erros no carregamento das vagas.
- Cálculo automático da compatibilidade entre candidato e vaga.
- Ordenação automática das vagas por compatibilidade.
- Exibição das três melhores vagas.
- Exibição da porcentagem de compatibilidade.
- Listagem das habilidades atendidas.
- Listagem das habilidades faltantes.
- Recomendação personalizada para cada vaga.
- Persistência dos dados do candidato utilizando LocalStorage.
- Interface responsiva para dispositivos móveis e desktop.

---

# 🛠 Tecnologias utilizadas

- HTML5
- CSS3 (Flexbox e Media Queries)
- JavaScript ES6+
- ES Modules
- Programação Orientada a Objetos (POO)
- Fetch API
- LocalStorage
- JSON
- Git
- GitHub

---

# 📚 Conceitos de JavaScript aplicados

Durante o desenvolvimento foram utilizados diversos conceitos estudados durante a disciplina:

- Manipulação do DOM
- Eventos
- Funções
- Arrow Functions
- Template Literals
- Objetos
- Arrays
- Métodos de Arrays (`map`, `sort`, `slice`, `forEach`)
- Callback Functions
- Closure
- Classes
- Programação Orientada a Objetos
- Encapsulamento
- ES Modules (`import` e `export`)
- Fetch API
- Async/Await
- Try/Catch
- Expressões Regulares (Regex)
- LocalStorage
- JSON

---

# 🧠 Funcionamento do sistema

O funcionamento do SkillMatch++ ocorre em cinco etapas principais:

```text
Usuário
    │
    ▼
Preenche o formulário
    │
    ▼
Validação dos dados
    │
    ▼
Carregamento das vagas (JSON)
    │
    ▼
Motor de Compatibilidade
    │
    ▼
Ordenação das vagas
    │
    ▼
Exibição das 3 melhores oportunidades
```

Durante a análise o sistema calcula:

- Percentual de compatibilidade.
- Habilidades atendidas.
- Habilidades faltantes.
- Classificação da vaga.
- Recomendação personalizada.

---

# 💾 Persistência dos dados

O sistema utiliza **LocalStorage** para armazenar o perfil do candidato.

As seguintes informações permanecem salvas mesmo após atualizar a página:

- Nome
- Email
- Telefone
- Idade
- Área de atuação
- Habilidades
- Experiência

Quando o usuário retorna ao sistema, os dados são recuperados automaticamente e o formulário é preenchido novamente.

---

# 📱 Responsividade

O projeto foi desenvolvido seguindo a abordagem **Mobile First**.

Foram utilizadas:

- Media Queries
- Flexbox
- Layout adaptativo
- Campos responsivos
- Interface otimizada para celulares, tablets e desktops

---

# 📂 Organização do projeto

```text
SkillMatch++
│
├── index.html
├── style.css
├── main.js
├── ui.js
├── motor.js
├── dados.js
├── vagas.json
└── README.md
```

### Responsabilidade de cada módulo

### `main.js`

Inicializa a aplicação.

### `ui.js`

Responsável pela interface gráfica, validações, manipulação do DOM e renderização das vagas.

### `motor.js`

Contém toda a regra de negócio do sistema:

- cálculo da compatibilidade;
- recomendações;
- contador de análises (Closure).

### `dados.js`

Responsável por:

- carregar o arquivo JSON utilizando Fetch;
- salvar informações no LocalStorage;
- recuperar informações do LocalStorage.

---

# ▶️ Como executar

1. Faça o download ou clone este repositório.

```bash
git clone https://github.com/PasteldeSazon/Skill-Match-.git
```

2. Abra o projeto no **Visual Studio Code**.

3. Instale a extensão **Live Server**.

4. Clique com o botão direito sobre o arquivo **index.html**.

5. Escolha **Open with Live Server**.

6. Preencha o formulário e realize a análise das vagas.

---

# 📖 Aprendizados

Durante o desenvolvimento deste projeto foi possível colocar em prática diversos conhecimentos adquiridos na disciplina, como:

- Organização de código em módulos;
- HTML semântico;
- CSS responsivo;
- Manipulação do DOM;
- Programação Orientada a Objetos;
- Fetch API;
- LocalStorage;
- Expressões Regulares;
- Git e GitHub;
- Organização de projetos Front-end.

---

# 🚀 Melhorias futuras

Algumas melhorias que podem ser implementadas em versões futuras são:

- Cadastro de novas vagas pela interface.
- Painel administrativo.
- Banco de dados.
- Sistema de login.
- Filtro por área de atuação.
- Busca por palavra-chave.
- Tema claro/escuro.
- Exportação dos resultados em PDF.
- Dashboard com gráficos.
- Integração com APIs de vagas reais.
- Sistema de favoritos.
- Histórico das análises realizadas.

---

# 📌 Considerações finais

O SkillMatch++ demonstra a aplicação prática de diversos conceitos fundamentais do desenvolvimento Front-end, integrando HTML, CSS e JavaScript para criar uma aplicação funcional, organizada, responsiva e modular.

Além de atender aos requisitos propostos pela disciplina, o projeto reforça boas práticas de programação, reutilização de código, organização em módulos e persistência de dados no navegador.

---

# 👨‍💻 Autor

**Gabriel Passos**

Projeto desenvolvido como atividade prática da disciplina de Desenvolvimento Web, aplicando os conhecimentos adquiridos em HTML5, CSS3, JavaScript, Programação Orientada a Objetos, Fetch API, LocalStorage e Git/GitHub.