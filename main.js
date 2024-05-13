const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let 1 =0; i < botoes,length; i++) {
    botoes[i].onclick = function () {
        
        for (letj = 0; j < botoes.length j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-12-01T00:00:00");
const tempoObjetivo2 = new Date("2024-12-30T00:00:00");
const tempoObjetivo3 = new Date("2024-12-30T00:00:00");
const tempoObjetivo4 = new Date("2025-02-01T00:00:00");