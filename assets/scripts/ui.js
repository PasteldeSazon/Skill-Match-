import motor from "./motor.js";
import dados from "./dados.js";

// const resultado = motor.avaliarCandidato(candidato, vaga);

// console.log(resultado.percentualAtendimento);
// console.log(resultado.habilidadesCorrespondentes);
// console.log(resultado.habilidadesFaltantes);

let vagas = [];

document.addEventListener("DOMContentLoaded", async () => {
  vagas = await dados.carregarVagas();
});

const form = document.getElementById("form");
const vagasContainer = document.getElementById("lista-vagas");

// Validar formulário
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
  if (!email.trim()) return "Email é obrigatório.";
  if (!telefone.trim()) return "Telefone é obrigatório.";
  // if (!idade || idade < 18 || idade > 120) return "Idade deve estar entre 18 e 120 anos.";
  if (!area.trim()) return "Área de atuação é obrigatória.";
  if (habilidades.length === 0) return "Selecione pelo menos uma habilidade.";
  if (!experiencia || experiencia < 0)
    return "Experiência deve ser um número positivo.";
  return null;
}

// Renderizar vagas com score
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
    <div class="vaga" style="border-left: 5px solid ${cor}">
      <div class="vaga-header">
        <h2>${item.vaga.cargo}</h2>
        <span class="score">${item.score.toFixed(0)}%</span>
      </div>
      <p><strong>Empresa:</strong> ${item.vaga.empresa}</p>
      <p><strong>Salário:</strong> R$ ${item.vaga.salario.toLocaleString("pt-BR")}</p>
      <p><strong>Modalidade:</strong> ${item.vaga.modalidade}</p>
      <p><strong>Requisitos:</strong> ${item.vaga.requisitos.join(", ")}</p>
      <p><strong>Requisitos atendidos:</strong> ${item.habilidadesCorrespondentes.join(", ") || "Nenhuma!"}</p>
      <p><strong>Habilidades não encontradas: </strong>${item.habilidadesFaltantes.join(", ") || "Nenhuma!"}</p>
      <p><strong>Recomendação:</strong> ${motor.recomendacaoVaga(item.vaga, item.score)}</p>
    </div>
  `;
    index++;
    const destaque = index === 0 ? "melhor-vaga" : "";
  } while (index < top3.length);
}

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

  // Validar
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

  // Criar candidato
  const candidato = new motor.Candidato(
    nome,
    idade,
    area,
    habilidades,
    experiencia,
  );

  // Salvar no localStorage
  const perfil = {
    nome,
    email,
    telefone,
    idade,
    area,
    habilidades,
    experiencia,
  };
  dados.salvarPerfil(perfil);

  // Mostrar vagas
  form.style.display = "none";
  vagasContainer.style.display = "block";
  await renderizarVagas(candidato);
});
