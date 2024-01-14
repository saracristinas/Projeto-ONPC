
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')


// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    imagem       : '0.png',  // ADICIONE
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    imagem       : 'q1.jpg',  // ADICIONE
    pergunta     : "Qual é o nome do protagonista de One Piece?",
    alternativaA : "Zoro",
    alternativaB : "Luffy",
    alternativaC : "Nami",
    alternativaD : "Sanji",
    correta      : "Luffy",
}
const q2 = {
    numQuestao   : 2,
    imagem       : 'q77.png',  // ADICIONE
    pergunta     : "Qual é o cozinheiro da tripulação dos chapéu de palha que tem uma perna fina?",
    alternativaA : "Olivia palito",
    alternativaB : "Sanji",
    alternativaC : "Mastigadinho",
    alternativaD : "Sua mae",
    correta      : "Sanji",
}
const q3 = {
    numQuestao   : 3,
    imagem       : '3.png',  // ADICIONE
    pergunta     : "Quem é o criador de one piece?",
    alternativaA : "Bolsonaro",
    alternativaB : "Zeca pagodinho",
    alternativaC : "Lula",
    alternativaD : "Eiichiro Oda",
    correta      : "Eiichiro Oda",
}
const q4 = {
    numQuestao   : 4,
    imagem       : 'q4.jpg',  // ADICIONE
    pergunta     : "Qual é o nome do navio dos Piratas do Chapéu de Palha?",
    alternativaA : "Thousand Sunny",
    alternativaB : "Red Force",
    alternativaC : "Going Merry",
    alternativaD : "Baratie",
    correta      : "Thousand Sunny",
}
const q5 = {
    numQuestao   : 5,
    imagem       : 'q5.jpeg',  // ADICIONE
    pergunta     : "Qual nome do mais mentiroso da tripulacao?",
    alternativaA : "Ussopp",
    alternativaB : "Pinóquio",
    alternativaC : "Pernalonga",
    alternativaD : "Patolino (calça de shopping)",
    correta      : "Ussopp",
}
const q6 = {
    numQuestao   : 6,
    imagem       : 'q7.jpg',  // ADICIONE
    pergunta     : "Qual a comida que o luffy mais gosta de comer?",
    alternativaA : "Pudim",
    alternativaB : "Carne",
    alternativaC : "Pastel de frango",
    alternativaD : "Bolacha cream cracker",
    correta      : "Carne",
}
const q7 = {
    numQuestao   : 7,
    imagem       : 'q7.jpg',  // ADICIONE
    pergunta     : "Oque o luffy tem medo?",
    alternativaA : "2 caras em uma moto em Recife",
    alternativaB : "Chinelo de mãe",
    alternativaC : "Cair na agua e se afogar",
    alternativaD : "Uma barata voadora",
    correta      : "Cair na agua e se afogar",
}
const q8 = {
    numQuestao   : 8,
    imagem       : 'q8.jpg',  // ADICIONE
    pergunta     : "Quem é conhecido como 'Deus' na ilha de Skypiea?",
    alternativaA : "Gan Fall",
    alternativaB : "Enel",
    alternativaC : "Wyper",
    alternativaD : "Satori",
    correta      : "Gan Fall",
}
const q9 = {
    numQuestao   : 9,
    imagem       : 'q9.jpg',  // ADICIONE
    pergunta     : "Oque o luffy quer se tornar?",
    alternativaA : "Uma águia",
    alternativaB : "Um transformer",
    alternativaC : "O rei dos piratas",
    alternativaD : "Seu pai",
    correta      : "O rei dos piratas",
}
const q10 = {
    numQuestao   : 10,
    imagem       : 'q11.png',  // ADICIONE
    pergunta     : "Quem é o espadachim da tripulação do chapéu de palha?",
    alternativaA : "Zoro",
    alternativaB : "Naruto",
    alternativaC : "O poste",
    alternativaD : "O gato de botas",
    correta      : "Zoro",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'image/'+q1.imagem)  // ADICIONE
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'image/'+questoes[nQuestao].imagem) // ADICIONE
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
