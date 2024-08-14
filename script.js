const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Gosta de futebol?",
            },
            {
                texto: "Não gosta de futebol?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já tentou jogar futebol?",
            },
            {
                texto: "Nunca tentei jogar futebol.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou saber como joga futebol?.",
            },
            {
                texto: "Não procurei como joga futebol.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Um bom local para jogar futebol?",
            },
            {
                texto: "Não tenho interesse.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pode procurar ajuda de como joga futebol.",
            },
            {
                texto: "Não quero ajuda.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pode ir em um estadio de futebol,tipo vila belmiro.",
            },
            {
                texto: "Não quero ir.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado você sobre este esporte.",
            },
            {
                texto: "Atualize a página para começar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();