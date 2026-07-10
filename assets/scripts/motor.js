import dados from "./dados.js";
import { listaVagas as vagasImportadas } from "./listaVagas.js";

export class Vaga {
  constructor(cargo, salario, requisitos, modalidade, id = null) {
    this.id = id;
    this.cargo = cargo;
    this.salario = salario;
    this.requisitos = requisitos;
    this.modalidade = modalidade;
  }
}

export class Candidato {
  constructor(nome, idade, area, habilidades, experienciaMeses) {
    this.nome = nome;
    this.idade = idade;
    this.area = area;
    this.habilidades = habilidades;
    this.experienciaMeses = experienciaMeses;
  }
}

export class VagaFrontEnd extends Vaga {
  constructor(cargo, empresa, requisitos, salario, modalidade, nivel) {
    super(cargo, salario, requisitos, modalidade);
    this.empresa = empresa;
    this.nivel = nivel;
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}

export const candidatoOriginal = {
  nome: "nome",
  idade: "idade",
  area: "area",
  habilidades: "",
  experienciaMeses: "experienciaMeses",
};

// Lista de vagas importadas de listaVagas.js (RF02)
export const listaVagas = vagasImportadas;




// Mostrar listagem de vagas (true = suprimir listagem inicial)
const SILENT = false;
// Controla se os detalhes por vaga devem ser impressos durante a avaliação
const PRINT_PER_VAGA = false;
if (!SILENT) {
  console.log("---------------------------------------");
  console.log("Vagas disponíveis:");
  console.log("---------------------------------------");
  listaVagas.forEach((vaga) => {
    console.log(` EMPRESA: ${vaga.empresa}`);
    console.log(` CARGO:   ${vaga.cargo} (ID: ${vaga.id})`);
    console.log(` SALÁRIO: R$ ${vaga.salario.toLocaleString("pt-BR")},00`);
    console.log(` MODELO:  ${vaga.modalidade}`);
    console.log(` REQUISITOS ORIGINAIS: ${vaga.requisitos.join(", ")}`);
    console.log("---------------------------------------");
  });
}

// Esta função compara as habilidades do candidato com os requisitos da vaga
// e retorna o percentual de compatibilidade (RF03). Ela também pode imprimir
// informações detalhadas quando `exibirLogs` está true.
export function avaliarCandidato(candidatoObjeto, vagaObjeto, exibirLogs = true) {
  // Encontra quais requisitos o candidato TEM (Atendidos) usando `filter` (RF08).
   const habilidadesCorrespondentes = vagaObjeto.requisitos.filter((requisito) =>
    candidatoObjeto.habilidades.includes(requisito),
  );

  // Encontra quais requisitos o candidato NÃO TEM (Não encontrados).
   const habilidadesFaltantes = vagaObjeto.requisitos.filter(
    (requisito) => !candidatoObjeto.habilidades.includes(requisito),
  );

  // Cálculos matemáticos usando o .length das listas acima
  const requisitosAtendidos = habilidadesCorrespondentes.length;
  const totalRequisitos = vagaObjeto.requisitos.length;
  const percentualAtendimento = (requisitosAtendidos / totalRequisitos) * 100;

  // Classificação textual (RF04) — converte o percentual em um rótulo legível.
  let classificacao = "";
  if (percentualAtendimento >= 80) classificacao = "Alta compatibilidade";
  else if (percentualAtendimento >= 50) classificacao = "Média compatibilidade";
  else classificacao = "Baixa compatibilidade";

  // EXIBE OS LOGS DETALHADOS (apenas se exibirLogs=true)
  if (exibirLogs) {
    console.log("---------------------------------------");
    console.log(
      `Habilidades correspondentes: ${habilidadesCorrespondentes.join(", ")} `,
    );

    // Mostra quais requisitos foram atendidos e quantos são.
    console.log(
      `Requisitos atendidos: ${habilidadesCorrespondentes.join(", ")} que corresponde ao total de ${requisitosAtendidos} requisitos atendidos.`,
    );
    console.log(
      `Total de requisitos da vaga: ${vagaObjeto.requisitos.join(", ")} (${totalRequisitos} requisitos no total).`,
    );
    console.log(
      `Habilidades atendidas: ${habilidadesCorrespondentes.join(", ")} (${requisitosAtendidos} requisitos atendidos).`,
    );
    // Mostra o que falta para o candidato atingir a vaga (RF05).
    console.log(
      `Habilidades não encontradas: ${habilidadesFaltantes.join(", ") || "Nenhuma!"}`,
    );
    console.log(`Classificação: ${classificacao}`);
    console.log("---------------------------------------");
    console.log(
      `Recomendações de estudo: priorize estudar ${habilidadesFaltantes.join(", ") || "Nenhuma!"}, pois esta(s) é(são) a(s) habilidade(s) que você ainda não possui e que é(são) requisitada(s) para a vaga. Focar nela(s) pode aumentar suas chances de conseguir a vaga!`,
    );
    console.log("---------------------------------------");
  }

  return {
  percentualAtendimento,
  classificacao,
  habilidadesCorrespondentes,
  habilidadesFaltantes,
};
}

// 4. Criação do objeto (instância do candidato) — exemplo preenchido (RF01).
// const novoCandidato = new Candidato(
//   "Carlos Pereira",
//   36,
//   "Desenvolvimento Front-End",
//   ["HTML", "CSS", "JavaScript"],
//   24,
// );

// console.log(
//   `Candidato: ${novoCandidato.nome}, ${novoCandidato.idade} anos, área: ${novoCandidato.area}, habilidades: ${novoCandidato.habilidades.join(", ")}, experiência: ${novoCandidato.experienciaMeses} meses.`,
// );

// Função utilitária para aguardar um tempo (retorna Promise) — usada para simular latência.
function aguardar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Simula o carregamento das vagas (RF14). Isso demonstra Promise + setTimeout.
function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(listaVagas), 2000);
  });
}

// Função assíncrona que executa a análise das vagas para um candidato.
// Usa `await` para esperar o carregamento simulado das vagas e demonstra o fluxo
// de processamento principal (RF14). Também usa o closure `contarAnalise()` para
// numerar as análises realizadas (RF13).
async function executarAnalise(candidato) {
  // Carrega as vagas (simulação de requisição)
  const vagasCarregadas = await buscarVagasSimuladas();

  const numeroAnalise = contarAnalise();
  console.log(
    `Análise nº ${numeroAnalise} para ${candidato.nome} foi executada!`,
  );

  const _originalConsoleLog = console.log;
  if (SILENT) console.log = function () {};

  if (PRINT_PER_VAGA)
    console.log("Comparando o candidato com todas as vagas disponíveis:");

  const resultadosVagas = vagasCarregadas.map((vaga, index) => {
    if (PRINT_PER_VAGA) {
      console.log("=======================================");
      console.log(`Vaga ${index + 1} de ${vagasCarregadas.length}`);
      console.log(`Empresa: ${vaga.empresa}`);
      console.log(`Cargo: ${vaga.cargo}`);
    }

    const resultadoVaga = avaliarCandidato(candidato, vaga, false);
    return { vaga, resultadoVaga };
  });

  if (SILENT) console.log = _originalConsoleLog;

  const melhorVaga = resultadosVagas.reduce((melhor, atual) => {
    return atual.resultadoVaga > melhor.resultadoVaga ? atual : melhor;
  }, resultadosVagas[0]);

  console.log("=======================================");
  return melhorVaga;
}

// Closure que mantém um contador privado de quantas análises foram executadas (RF13).
function criarContadorDeAnalises() {
  let total = 0; // variável privada ao closure
  return function () {
    total += 1; // incrementa a cada chamada
    return total; // retorna o total atual
  };
}

const contarAnalise = criarContadorDeAnalises();

// Gera uma recomendação final com base na % de aderência (RF07/RF04).
function recomendacaoVaga(vaga, resultadoVaga) {
  if (resultadoVaga >= 80) {
    return "🟢 Altamente recomendado para esta vaga.";
  } else if (resultadoVaga >= 50) {
    return "🟡 Recomendado, mas pode precisar de desenvolvimento em algumas áreas.";
  } else {
    return "🔴 Não atende a maioria dos requisitos para esta vaga.";
  }
}

// Função que demonstra o uso de callback (RF12).
function finalizarAnalise(nomeCandidato, callback) {
  console.log("Análise finalizada.");
  callback(nomeCandidato);
}

export default {
  candidatoOriginal,
  listaVagas,
  Vaga,
  Candidato,
  VagaFrontEnd,
  SILENT,
  PRINT_PER_VAGA,
  avaliarCandidato,
  aguardar,
  buscarVagasSimuladas,
  executarAnalise,
  criarContadorDeAnalises,
  contarAnalise,
  recomendacaoVaga,
  finalizarAnalise,
};


