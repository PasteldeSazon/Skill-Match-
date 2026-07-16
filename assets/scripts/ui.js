import motor from "./motor.js";
import dados from "./dados.js";
import { criarContadorAnalises } from "./motor.js";

const contarAnalises = criarContadorAnalises();

let vagas = [];

document.addEventListener("DOMContentLoaded", async () => {
  // Carrega as vagas
  vagas = await dados.carregarVagas();

  // Recupera o perfil salvo
  const perfil = dados.carregarPerfilLocalStorage();

  if (perfil) {
    document.getElementById("nome").value = perfil.nome || "";
    document.getElementById("email").value = perfil.email || "";
    document.getElementById("telefone").value = perfil.telefone || "";
    document.getElementById("idade").value = perfil.idade || "";
    document.getElementById("area").value = perfil.area || "";
    document.getElementById("experiencia").value = perfil.experiencia || 0;

    perfil.habilidades?.forEach((habilidade) => {
      const checkbox = document.querySelector(
        `input[name="habilidades"][value="${habilidade}"]`,
      );

      if (checkbox) {
        checkbox.checked = true;
      }
    });
  }
});

const form = document.getElementById("form");
const vagasContainer = document.getElementById("lista-vagas");

// =====================
// Validação do formulário
// =====================
function validarFormulario(
  nome,
  email,
  telefone,
  idade,
  area,
  habilidades,
  experiencia,
) {
  if (!nome.trim()) return "Nome é obrigatório.";

  const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
  if (!regexNome.test(nome)) {
    return "O nome deve conter apenas letras.";
  }

  const regexEspacos = /\s{2,}/;
  if (regexEspacos.test(nome)) {
    return "Não utilize vários espaços consecutivos.";
  }

  const regexNumero = /\d/;
  if (regexNumero.test(nome)) {
    return "O nome não pode conter números.";
  }

  if (!email.trim()) return "Email é obrigatório.";

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    return "Digite um e-mail válido.";
  }

  if (!telefone.trim()) return "Telefone é obrigatório.";

  const regexTelefone = /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/;

  if (!regexTelefone.test(telefone)) {
    return "Telefone inválido.";
  }

  if (Number.isNaN(idade) || idade < 18 || idade > 120) {
    return "Idade deve estar entre 18 e 120 anos.";
  }

  if (!area.trim()) {
    return "Área de atuação é obrigatória.";
  }

  if (habilidades.length === 0) {
    return "Selecione pelo menos uma habilidade.";
  }

  if (Number.isNaN(experiencia) || experiencia < 0) {
    return "Experiência deve ser um número positivo.";
  }

  return null;
}

// =====================
// Renderização das vagas
// =====================
async function renderizarVagas(candidato) {
  if (vagas.length === 0) {
    alert("As vagas ainda estão sendo carregadas. Aguarde alguns segundos.");
    return;
  }

  vagasContainer.innerHTML = "";

  const vagasComScore = vagas.map((vaga) => {
    const resultado = motor.avaliarCandidato(candidato, vaga, false);

    return {
      vaga,
      score: resultado.percentualAtendimento,
      habilidadesCorrespondentes: resultado.habilidadesCorrespondentes,
      habilidadesFaltantes: resultado.habilidadesFaltantes,
    };
  });

  vagasComScore.sort((a, b) => b.score - a.score);

  const top3 = vagasComScore.slice(0, 3);

  let index = 0;

  do {
    const item = top3[index];

    const cor =
      item.score >= 80 ? "#4CAF50" : item.score >= 50 ? "#FFC107" : "#F44336";

    vagasContainer.innerHTML += `
      <article class="vaga" style="border-left: 5px solid ${cor}">
        <header class="vaga-header">
          <h2>${item.vaga.cargo}</h2>
          <span class="score">${item.score.toFixed(0)}%</span>
        </header>

        <p><strong>Empresa:</strong> ${item.vaga.empresa}</p>

        <p><strong>Salário:</strong>
          R$ ${item.vaga.salario.toLocaleString("pt-BR")}
        </p>

        <p><strong>Modalidade:</strong> ${item.vaga.modalidade}</p>

        <p><strong>Requisitos:</strong>
          ${item.vaga.requisitos.join(", ")}
        </p>

        <p><strong>Requisitos atendidos:</strong>
          ${item.habilidadesCorrespondentes.join(", ") || "Nenhum"}
        </p>

        <p><strong>Habilidades não encontradas:</strong>
          ${item.habilidadesFaltantes.join(", ") || "Nenhuma"}
        </p>
        <p><strong>Recomendações de estudo: </strong>Priorize estudar ${item.habilidadesFaltantes.join(", ") || "Nenhuma"}</p>
        <p><strong>Recomendação:</strong>
          ${motor.recomendacaoVaga(item.vaga, item.score)}
        </p>
      </article>
    `;

    index++;
  } while (index < top3.length);
}

// =====================
// Submit
// =====================
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const idade = parseInt(document.getElementById("idade").value);

  const area = document.getElementById("area").value;

  const habilidades = Array.from(
    document.querySelectorAll('input[name="habilidades"]:checked'),
  ).map((cb) => cb.value);

  const experiencia =
    parseInt(document.getElementById("experiencia").value) || 0;

  // =====================
  // Validação
  // =====================

  const erro = validarFormulario(
    nome,
    email,
    telefone,
    idade,
    area,
    habilidades,
    experiencia,
  );

  if (erro) {
    alert(erro);
    return;
  }

  // =====================
  // Contador de análises (Closure)
  // =====================

  const numeroAnalise = contarAnalises();

  const contador = document.getElementById("contador-analises");

  if (contador) {
    contador.textContent = `Análise nº ${numeroAnalise}`;
  }

  const aviso = document.getElementById("avisos");

  if (aviso) {
    aviso.innerHTML = `
      <h3>As 3 vagas mais recomendadas conforme o seu perfil</h3>
      <p>A primeira da lista é a que possui maior compatibilidade.</p>
    `;
  }

  // =====================
  // Criação do candidato
  // =====================

  const candidato = new motor.Candidato(
    nome,
    idade,
    area,
    habilidades,
    experiencia,
  );

  // =====================
  // Salvar no LocalStorage
  // =====================

  dados.salvarPerfil({
    nome,
    email,
    telefone,
    idade,
    area,
    habilidades,
    experiencia,
  });

  // =====================
  // Exibir resultado
  // =====================

  form.style.display = "none";
  vagasContainer.classList.add("visible");

  await renderizarVagas(candidato);
});
const botaoLimpar = document.getElementById("btnL");

botaoLimpar.addEventListener("click", function () {
  form.reset();
});
