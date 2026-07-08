// Lista de vagas do sistema (RF02) -- array de objetos que descrevem cada vaga.
// Cada objeto deve conter: id, empresa, cargo, requisitos (array), salario e modalidade.
export const listaVagas = [
  {
    id: 1,
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Back-End Júnior",
    requisitos: ["JavaScript", "Node.js", "SQL"],
    salario: 4800,
    modalidade: "Presencial",
  },
  {
    id: 2,
    empresa: "InovaTech",
    cargo: "Desenvolvedor Back-End Pleno",
    requisitos: ["JavaScript", "Node.js", "Docker", "React"],
    salario: 7000,
    modalidade: "Remoto",
  },
  {
    id: 3,
    empresa: "CodeMasters",
    cargo: "Desenvolvedor Back-End Sênior",
    requisitos: ["JavaScript", "Node.js", "Docker", "Kubernetes"],
    salario: 11000,
    modalidade: "Híbrido",
  },
  {
    id: 4,
    empresa: "SoftVision",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["HTML", "CSS", "JavaScript"],
    salario: 4200,
    modalidade: "Remoto",
  },
  {
    id: 5,
    empresa: "WebCore",
    cargo: "Desenvolvedor Front-End Pleno",
    requisitos: ["HTML", "CSS", "JavaScript", "React"],
    salario: 6500,
    modalidade: "Híbrido",
  },
  {
    id: 6,
    empresa: "Pixel Studio",
    cargo: "Desenvolvedor Front-End Sênior",
    requisitos: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    salario: 9800,
    modalidade: "Presencial",
  },
  {
    id: 7,
    empresa: "CloudTech",
    cargo: "Desenvolvedor Full Stack Júnior",
    requisitos: ["HTML", "CSS", "JavaScript", "Node.js"],
    salario: 5500,
    modalidade: "Remoto",
  },
  {
    id: 8,
    empresa: "Infinity Systems",
    cargo: "Desenvolvedor Full Stack Pleno",
    requisitos: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "SQL",
    ],
    salario: 8500,
    modalidade: "Híbrido",
  },
  {
    id: 9,
    empresa: "NextCode",
    cargo: "Desenvolvedor Full Stack Sênior",
    requisitos: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Docker",
      "SQL",
    ],
    salario: 12500,
    modalidade: "Remoto",
  },
  {
    id: 10,
    empresa: "DataSoft",
    cargo: "Analista de Dados Júnior",
    requisitos: ["SQL", "Python", "Excel"],
    salario: 5000,
    modalidade: "Presencial",
  },
  {
    id: 11,
    empresa: "AI Labs",
    cargo: "Cientista de Dados Pleno",
    requisitos: ["Python", "SQL", "Machine Learning", "Pandas"],
    salario: 9500,
    modalidade: "Remoto",
  },
  {
    id: 12,
    empresa: "CyberSafe",
    cargo: "Analista de Segurança da Informação",
    requisitos: ["Linux", "Redes", "Python", "Segurança"],
    salario: 8200,
    modalidade: "Híbrido",
  },
  {
    id: 13,
    empresa: "DevOps Brasil",
    cargo: "Engenheiro DevOps",
    requisitos: ["Docker", "Kubernetes", "Linux", "AWS"],
    salario: 13000,
    modalidade: "Remoto",
  },
  {
    id: 14,
    empresa: "MobileX",
    cargo: "Desenvolvedor Mobile",
    requisitos: ["Flutter", "Dart", "Git"],
    salario: 7600,
    modalidade: "Híbrido",
  },
  {
    id: 15,
    empresa: "Quality Tech",
    cargo: "Analista de Testes (QA)",
    requisitos: ["JavaScript", "Testes Automatizados", "Git"],
    salario: 6200,
    modalidade: "Remoto",
  },
];

// ========================================
// MÓDULO DE DADOS (RF14 - Fetch + localStorage)
// ========================================

// 1. Carrega as vagas do arquivo vagas.json com tratamento de 3 estados
// Estados: carregando, sucesso, erro
async function carregarVagas() {
  try {
    console.log("📥 Carregando vagas...");
    const resposta = await fetch("../../assets/dados/vagas.json");

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const vagas = await resposta.json();
    console.log("✅ Vagas carregadas com sucesso!");
    return vagas;
  } catch (erro) {
    console.error("❌ Erro ao carregar vagas:", erro.message);
    return [];
  }
}

// 2. Salva o perfil do candidato em localStorage como JSON (RF14 - persistência)
function salvarPerfil(perfil) {
  try {
    const perfilJSON = JSON.stringify(perfil);
    localStorage.setItem("perfilCandidato", perfilJSON);
    console.log("✅ Perfil salvo com sucesso!");
    return true;
  } catch (erro) {
    console.error("❌ Erro ao salvar perfil:", erro.message);
    return false;
  }
}

// 3. Carrega o perfil do candidato do localStorage com verificação de null
function carregarPerfilLocalStorage() {
  try {
    const perfilJSON = localStorage.getItem("perfilCandidato");

    if (!perfilJSON) {
      console.log("ℹ️ Nenhum perfil salvo encontrado.");
      return null;
    }

    const perfil = JSON.parse(perfilJSON);
    console.log("✅ Perfil carregado do localStorage!");
    return perfil;
  } catch (erro) {
    console.error("❌ Erro ao carregar perfil:", erro.message);
    return null;
  }
}

// 4. Limpa o perfil salvo do localStorage
function limparPerfil() {
  try {
    localStorage.removeItem("perfilCandidato");
    console.log("✅ Perfil removido com sucesso!");
    return true;
  } catch (erro) {
    console.error("❌ Erro ao limpar perfil:", erro.message);
    return false;
  }
}

export default {
  carregarVagas,
  salvarPerfil,
  carregarPerfilLocalStorage,
  limparPerfil,
};

