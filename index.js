const classificacoes_div = document.getElementById("classifacao");
const n_de_cavidades_div = document.getElementById("div_n_de_cavidades");
const n_sementes_div = document.getElementById("div_n_de_sementes");
const cpu_jogador_div = document.getElementById("div_cpu_jogador");
const dificuldade_ia_div = document.getElementById("div_n_de_ia");
const quem_comeca_div = document.getElementById("div_quem_comeca");
const id_div = document.getElementById("div_user");
const instruc_div = document.getElementById("instrucoes");
const tabuleiro_div = document.getElementById("tabuleiro");


const btn_start = document.getElementById("button_start");

tabuleiro_div.style.display = "none";
instruc_div.style.display = "none";
classificacoes_div.style.display = "none";

function showhide_instruc(d) {
    d.style.display = (d.style.display !== "none") ? "none" : "block";
}
btn_start.onclick = function () {
    n_de_cavidades_div.style.display = "none";
    n_sementes_div.style.display = "none";
    cpu_jogador_div.style.display = "none";
    dificuldade_ia_div.style.display = "none";
    quem_comeca_div.style.display = "none";
    id_div.style.display = "none";
    tabuleiro_div.style.display = "block";
};