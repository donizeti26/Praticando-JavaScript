let formulario = document.querySelector('#citacao00')
let dataCitacao = formulario.querySelector('h2')
let textoCitacao = formulario.querySelector('blockquote')
let autorCitacao = formulario.querySelector('span')
let testBody = document.querySelector('#testBody')


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
    let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

if(dataInput == '' || citacao == ''|| autor == ''){
    abrirModal()

}else{
    criarMensagem(dataFormatada, citacao, autor)
    window.scroll(0,970)
}

}
function abrirModal() {
    location.href="#abrirModal"
}
function criarMensagem(dataFormatada, citacao, autor){
    dataCitacao.textContent    = dataFormatada
    textoCitacao.textContent   = citacao
    autorCitacao.textContent = autor
    
    download()
    testBody.classList.add('ocultar');
}
function download(){
    html2canvas(formulario).then(canvas => {document.body.appendChild(canvas)
        
    })
    let aviso2 = document.querySelector('#aviso2')
    aviso2.textContent = "Clique com o botão direito e escolha salvar a imagem como..."

    
}

