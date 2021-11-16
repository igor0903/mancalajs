const classificacoes_div = document.getElementById("classifacao");
const n_de_cavidades_div = document.getElementById("div_n_de_cavidades");
const n_sementes_div = document.getElementById("div_n_de_sementes");
const cpu_jogador_div = document.getElementById("div_cpu_jogador");
const dificuldade_ia_div = document.getElementById("div_n_de_ia");
const quem_comeca_div = document.getElementById("div_quem_comeca");
const id_div = document.getElementById("div_user");
const instruc_div = document.getElementById("instrucoes");
const tabuleiro_div = document.getElementById("tabuleiro");
const config_div = document.getElementById("config");

tabuleiro_div.style.display = "none";
instruc_div.style.display = "none";
classificacoes_div.style.display = "none";

function showhide_instruc(d) {
    d.style.display = (d.style.display !== "none") ? "none" : "block";
}
function showhide_startgame(d) {
    d.style.display = (d.style.display !== "none") ? "none" : "block";
    tabuleiro_div.style.display = (tabuleiro_div.style.display !== "none") ? "none" : "block";
}