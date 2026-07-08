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
