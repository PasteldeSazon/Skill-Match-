# SkillMatch++

Uma plataforma web inovadora que conecta profissionais de tecnologia com oportunidades de trabalho baseada na compatibilidade de habilidades.

## 🎯 Objetivo

O SkillMatch++ resolve o problema de desajuste entre habilidades do candidato e requisitos da vaga. Ao preencher um perfil com nome, área de atuação e habilidades, o sistema calcula automaticamente a compatibilidade com todas as vagas disponíveis, recomendando quais aprender para melhorar as chances.

## 🚀 Como Executar

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Live Server ou servidor local (necessário para módulos ES6 e fetch)

### Passos

1. **Abra com Live Server**
   - No VS Code: clique com botão direito em `index.html` → "Open with Live Server"
   - Ou acesse `http://localhost:5500/` (porta pode variar)

2. **Preencha o formulário**
   - Nome, email, telefone, idade
   - Selecione sua área e habilidades
   - Clique em "Gerar perfil"

3. **Veja as vagas recomendadas**
   - Os cards aparecem ordenados por compatibilidade
   - Score visual com cores (verde, amarelo, vermelho)
   - Recomendações personalizadas por vaga

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Semântico com landmarks (`<header>`, `<main>`, `<footer>`)
- **CSS3** - Flexbox, Grid, media queries, mobile-first
- **JavaScript ES6+** - Módulos, Classes, Promises, async/await

### Arquitetura Modular
- `motor.js` - Lógica: Classes (Vaga, Candidato), cálculo de compatibilidade
- `ui.js` - Interface: Renderização dinâmica, validação, eventos
- `dados.js` - Dados: Persistência (localStorage), estado
- `main.js` - Orquestrador: Coordena os módulos
- `vagas.json` - Catálogo de vagas

## 📋 Requisitos Implementados (PDF)

### Grupo A: Motor (RF01-RF08, RF13)
- ✅ RF01: Classe Candidato com atributos
- ✅ RF03: Cálculo de compatibilidade em %
- ✅ RF04: Classificação (Alta/Média/Baixa)
- ✅ RF08: Método filter() para requisitos
- ✅ RF13: Closure para contar análises

### Grupo B: Interface (RF02, RF05-RF07, RF11, RF12)
- ✅ RF02: Form com múltiplos campos
- ✅ RF05: Sugestões de habilidades a aprender
- ✅ RF07: Recomendação final
- ✅ RF11: Método exibirNivel() com this
- ✅ RF12: Callback em finalizarAnalise()

### Grupo C: Dados (RF14)
- ✅ RF14: Fetch com 3 estados (loading/success/error)
- ✅ RF14: localStorage com JSON

### Grupo D: Organização (RF09, RF10, RF15, RF16)
- ✅ RF09: Classes Vaga e VagaFrontEnd
- ✅ RF10: Herança (VagaFrontEnd extends Vaga)
- ✅ RF15: ES6 modules
- ✅ RF16: Clean code

## 📂 Estrutura do Projeto

```
Skill-Match-/
├── index.html              # Página principal com formulário
├── assets/
│   ├── styles/
│   │   └── style.css       # Estilos responsivos
│   ├── dados/
│   │   └── vagas.json      # Catálogo de vagas
│   └── scripts/
│       ├── motor.js        # Lógica principal
│       ├── ui.js           # Interface
│       ├── dados.js        # Dados e persistência
│       └── main.js         # Orquestrador
└── README.md               # Este arquivo
```

## 🎨 Design

- **Mobile-First**: Desenvolvido para mobile, escalando para tablet e desktop
- **Responsivo**: Media queries em 640px e 1024px
- **Acessível**: Suporte a focus states, aria-labels
- **Performance**: CSS otimizado, sem frameworks

## 💾 Persistência de Dados

Os dados do candidato são salvos em localStorage com a seguinte estrutura:

```javascript
{
  nome: "João Silva",
  email: "joao@example.com",
  telefone: "(11) 98765-4321",
  idade: 28,
  area: "Desenvolvimento Back-End",
  habilidades: ["JavaScript", "Node.js", "SQL"],
  experiencia: 36
}
```

## 🔄 Fluxo de Dados

1. Usuário preenche formulário
2. Validação de dados
3. Criação de objeto Candidato
4. Salvamento em localStorage
5. Cálculo de compatibilidade com cada vaga
6. Ordenação por score
7. Renderização de cards com recomendações

## 🧪 Testando

Para testar a aplicação:

1. Abra em Live Server
2. Preencha o formulário com dados válidos
3. Selecione pelo menos uma habilidade
4. Clique "Gerar perfil"
5. Observe os cards de vagas com scores
6. Verifique localStorage (DevTools → Application → Local Storage)
