# 🚀 SkillMatch – Sistema Inteligente de Compatibilidade entre Candidatos e Vagas

## 📖 Sobre o projeto

O **SkillMatch** é uma aplicação web desenvolvida em **HTML5, CSS3 e JavaScript puro (ES Modules)** com o objetivo de analisar o perfil de um candidato e identificar as vagas de emprego mais compatíveis com suas habilidades.

O sistema recebe as informações preenchidas pelo usuário em um formulário, compara essas informações com os requisitos disponíveis em um catálogo de vagas e apresenta as oportunidades mais compatíveis, indicando a porcentagem de compatibilidade, as habilidades atendidas, as habilidades que ainda precisam ser desenvolvidas e uma recomendação personalizada para cada vaga.

Este projeto foi desenvolvido como atividade prática do curso, aplicando conceitos fundamentais de desenvolvimento Front-end utilizando apenas tecnologias nativas da Web, sem frameworks ou bibliotecas externas.

---

# 🎯 Objetivos

* Aplicar conceitos de HTML semântico e acessível.
* Desenvolver interfaces responsivas utilizando CSS.
* Utilizar JavaScript moderno com ES Modules.
* Trabalhar com Programação Orientada a Objetos (POO).
* Consumir dados externos utilizando Fetch API.
* Persistir informações utilizando LocalStorage.
* Desenvolver lógica de compatibilidade entre candidatos e vagas.
* Organizar o código de forma modular e reutilizável.

---

# ✨ Funcionalidades

* Cadastro de candidato através de formulário.
* Validação completa dos campos.
* Carregamento das vagas através de arquivo JSON utilizando Fetch API.
* Tratamento dos estados de carregamento, erro e lista vazia.
* Cálculo automático da compatibilidade entre candidato e vaga.
* Exibição das três vagas mais compatíveis.
* Classificação automática da compatibilidade.
* Exibição das habilidades atendidas.
* Exibição das habilidades que ainda precisam ser desenvolvidas.
* Recomendações de estudo para aumentar as chances de contratação.
* Armazenamento do perfil do candidato utilizando LocalStorage.
* Interface responsiva para dispositivos móveis e desktop.

---

# 🛠 Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API
* LocalStorage
* JSON
* Git
* GitHub

---

# 📚 Conceitos de JavaScript aplicados

Durante o desenvolvimento foram utilizados diversos conceitos estudados ao longo do curso, entre eles:

* Manipulação do DOM
* Eventos
* Funções
* Arrow Functions
* Template Literals
* Objetos
* Arrays
* Métodos de Array (`map`, `filter`, `sort`, `slice`)
* Callback Functions
* Closure
* Programação Orientada a Objetos
* Classes
* Herança
* Encapsulamento
* ES Modules (`import` e `export`)
* Fetch API
* Tratamento de erros (`try/catch`)
* LocalStorage
* JSON

---

# 🧠 Funcionamento da análise

O sistema realiza uma comparação entre as habilidades informadas pelo candidato e os requisitos de cada vaga disponível.

Para cada vaga são calculados:

* Percentual de compatibilidade.
* Quantidade de requisitos atendidos.
* Habilidades encontradas.
* Habilidades faltantes.
* Classificação da compatibilidade.
* Recomendação personalizada.

Após todos os cálculos, as vagas são ordenadas pela porcentagem de compatibilidade e são apresentadas ao usuário as três melhores oportunidades.

---

---

# ▶️ Como executar

1. Faça o download ou clone este repositório.

2. Abra o projeto no Visual Studio Code.

3. Instale a extensão **Live Server**.

4. Clique com o botão direito no arquivo **index.html**.

5. Selecione **Open with Live Server**.

6. Preencha o formulário e realize a análise das vagas.

---

# 💾 Persistência de dados

O perfil do candidato é armazenado utilizando o **LocalStorage**, permitindo que as informações sejam recuperadas posteriormente mesmo após atualizar a página.

---

# 📱 Responsividade

A interface foi desenvolvida seguindo o conceito **Mobile First**, adaptando automaticamente o layout para diferentes tamanhos de tela, proporcionando uma boa experiência tanto em dispositivos móveis quanto em computadores.

---

# 📌 Organização do código

O projeto foi dividido em módulos para facilitar a manutenção e reutilização do código.

* **main.js** — inicialização da aplicação.
* **ui.js** — interface e manipulação do DOM.
* **motor.js** — regras de negócio e cálculo da compatibilidade.
* **dados.js** — carregamento dos dados e manipulação do LocalStorage.

---

# 📖 Aprendizados

Durante o desenvolvimento deste projeto foi possível aplicar diversos conceitos fundamentais do desenvolvimento Front-end, principalmente organização de código, modularização, manipulação do DOM, programação orientada a objetos, consumo de APIs utilizando Fetch e persistência de dados com LocalStorage.

Além do desenvolvimento técnico, o projeto proporcionou uma melhor compreensão sobre organização de projetos, versionamento com Git e boas práticas de programação.

---

# 🚀 Melhorias futuras

* Adicionar filtros por área de atuação.
* Implementar busca por palavra-chave.
* Adicionar tema claro e escuro.
* Exibir gráficos com estatísticas do candidato.
* Permitir cadastro de novas vagas pela interface.
* Gerar relatório em PDF com os resultados da análise.

---

# 👨‍💻 Autor

**Gabriel Passos**

Projeto desenvolvido como atividade prática do curso, aplicando os conhecimentos adquiridos durante as aulas de HTML, CSS e JavaScript.
