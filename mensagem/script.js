let formulario = document.querySelector('#citacao00')
let dataCitacao = formulario.querySelector('h2')
let textoCitacao = formulario.querySelector('blockquote')
let autorCitacao = formulario.querySelector('span')



let btnLimpar = document.querySelector('#limpar')
let btnCriar = document.querySelector('#criar')
btnLimpar.addEventListener('click', ()=>{document.location.reload()
    window.scroll(0,0)
})

function criarCitacao(){
    let dataInput = document.querySelector('#data').value
    let citacao = document.querySelector('#textArea').value
    let autor = document.querySelector('#autor').value

    let data = new Date(dataInput)
    let dataFormatada = data.toLocaleString('pt-BR', {timeZone: 'UTC'})

if(dataInput == '' || citacao == ''|| autor == ''){
    	console.log('ERRO VAZIO')
}else{
    criarMensagem(dataFormatada, citacao, autor)
    window.scroll(0,670)
}

}

function criarMensagem(data, citacao, autoria){
    dataCitacao.textContent    = data
    textoCitacao.textContent   = citacao
    autoriaCitacao.textContent = autoria


    download()
}
function download(){
    html2canvas(formulario).then(canvas => {document.body.appendChild(canvas)

    })
    let aviso = document.querySelector('#aviso')
    aviso.textContent = "Clique com o botão direito e escolha salvar a imagem como..."
}

