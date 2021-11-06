//definir perguntas e respostas
//Tema: Casa do Harry Potter
class Pergunta {
    constructor(titulo, alternativas) {
        this.titulo = titulo;
        this.alternativas = alternativas
    }
}

let perguntas = [
    new Pergunta(titulo = "Escolha uma Ferramenta de limpeza para jogar Quadribol:",
        alternativas = ["Ancinho", "Esfregão", "Vassoura", "Aspirador de pó"]),
    new Pergunta(titulo = "Escolha uma Cor:",
        alternativas = ["Verde", "Azul", "Amarelo", "Vermelho"]),
    new Pergunta(titulo = "Você é Bruxo",
        alternativas = ["sim", "não"]),
    new Pergunta(titulo = "Escolha um Feitiço: ",
        alternativas = ["Expecto Pratonum", "Hocus Pocus", "Avada Cadabera"]),
    new Pergunta(titulo = "Você esta usando meias?: ",
        alternativas = ["sim", "não"]),
]

let totalDePontos = 0
let perguntasHtml = document.getElementById("perguntas")

for (let i in perguntas) {
    let pergunta = perguntas[i]
    let alternativas = ""
    

    for (index in pergunta.alternativas) {//percorrer as alternativas e armazenar dentro da var alternativas
        alternativas += `<input type="radio" 
        id="alternativa${index}" 
        name="${i}" 
        value="${index}">
        <label for="alternativa${index}">
        ${pergunta.alternativas[index]}</label><br/>`
        
    }

    //retornar as variaveis para aparecer as opções na tela
    perguntasHtml.innerHTML += `<div class="pergunta">
                    <div class="titulo">${pergunta.titulo}</div>
                    <div class="alternativas">${alternativas}</div>
                </div>`
    totalDePontos += pergunta.alternativas.length
}

let corrigir = () => {
    let pontos = 0

    let resultadoHtml = document.getElementById("resultado")
    for (let elemento of document.querySelectorAll('input[type="radio"]:checked')) {
        pontos += parseInt(elemento.value)
    }
    if (pontos <= 2) {
        resultadoHtml.innerHTML = `Você é da casa grifinória com ${pontos} pontos`
    }
    if (pontos >= 3 && pontos <= 5) {
        resultadoHtml.innerHTML = `Você é da casa sonserina com ${pontos} pontos`
    }
    if (pontos >= 6 && pontos <= 8) {
        resultadoHtml.innerHTML = `Você é da casa lufa lufa com ${pontos} pontos`
    }
    if (pontos >= 9) {
        resultadoHtml.innerHTML = `Você é da casa corvinal com ${pontos} pontos`
    }
}

console.log(totalDePontos)