let NumQuestoes = document.querySelector('#NumQuestoes')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let pontos = 0
let placar = document.querySelector('.placar')

let titulo = document.querySelector('#titulo')

let questao = document.querySelector('#questao')
let pergunta = document.querySelector('#pergunta')

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')
let aviso = document.querySelector('#aviso')

titulo.textContent = "Maia Quiz"

//ENDEREÇO DO ARQUIVO JSON
const url = './data.json'


function pegarDados(i){
    fetch(url).then(responses =>{
        return responses.json()
    }).then(data =>{
        if(data.erro){
            console.log("Erro ao acessar JSON")
            return
        }

        // passar quantidade de questões para a variavel
        let qtdQuestoes = (data.questoes.length)-1

        //escrever a quantidade para o total
        total.textContent = parseInt(qtdQuestoes)

        //passe o valor de i no parametro

        atribuirDados(data,i)
    })
}

function atribuirDados(data, i) {
    if(i >= data.questoes.length) {
      //console.log('Fim das questoes')
      i = 1
    }
      NumQuestoes.textContent = data.questoes[i].numQuestao
      pergunta.textContent = data.questoes[i].pergunta
  
      a.textContent = data.questoes[i].alternativaA
      b.textContent = data.questoes[i].alternativaB
      c.textContent = data.questoes[i].alternativaC
      d.textContent = data.questoes[i].alternativaD
      
      numero.textContent = data.questoes[i].numQuestao
      
      let certa = document.querySelector('#correct')
      certa.value = data.questoes[i].correta
      //console.log(resposta)
  }


  
// COMECAR O QUIZ
let questaoAtual = 1
pegarDados(1)

function proximaQuestao(numQuestao) {
  let proxima = parseInt(numQuestao)
  pegarDados(proxima)
}

function verificarSeAcertou(nQuestao, resposta) {

  let numeroDaQuestao = nQuestao.value

  let respostaEscolhida = resposta.textContent

  // usar o fetch para pegar os dados
  pegarDados(numeroDaQuestao)

  let respostaCorrect = correct.value
  //console.log(respostaCorrect)

  if(respostaEscolhida == respostaCorrect) {
      console.log("Acertou")
      pontos += 10 // pontos = pontos + 10
  } else {
      console.log("Errou!")
  }

  quantidadeDeQuestoes = parseInt(total.textContent)
  //console.log("Total " + quantidadeDeQuestoes)

  proxima = parseInt(numero.textContent)+1
  //console.log("Próxima " + proxima)

  setTimeout(function() {
    
    if(proxima > quantidadeDeQuestoes) {
        console.log('Fim do Jogo!')
        fimDoJogo()
    } else {
        proximaQuestao(proxima)
    }
  }, 50)

  // atualizar o placar
  atualizarPlacar()

}

function atualizarPlacar() {
  placar.textContent = pontos
}

function fimDoJogo() {


  let s = 's'
  pontos == 0 ? s = '' : s = s
  instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

  instrucoes.classList.add('placar')

  // OCULTAR O ARTICLE DA QUESTAO
  questao.style.display = 'none'

  setTimeout(function() {
      pontos = 0 // zerar placar
      instrucoes.classList.remove('placar')

      // REINICIAR O JOGO
      questao.style.display = 'block'
      proximaQuestao(1)
      instrucoes.textContent = 'Leia a questão e clique na resposta correta'
  }, 7000)

}