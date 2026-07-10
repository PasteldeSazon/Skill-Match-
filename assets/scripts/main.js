import "./ui.js";

// import { carregarVagas } from "./dados.js";

// carregarVagas();

import dados from "./dados.js";

async function iniciar() {
    const vagas = await dados.carregarVagas();

    console.log(vagas);
}
// const vagas = await carregarVagas();
// iniciar();