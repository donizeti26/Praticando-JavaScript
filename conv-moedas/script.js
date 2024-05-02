let inputMoeda = document.querySelector('#inputMoeda')
let radios = document.querySelectorAll('.radios')
let moedaSelecionada 
let valorConvert

let convert = document.querySelector('.convert')
let inputResult = document.querySelector('#inputResult')

let result = document.querySelector('.result')
let alert = document.querySelector('.alert')
let limpar = document.querySelector('#limpar')




// COTACOES DO DIA 02/05/2024

let dolar = 5.11;
let euro = 5.47
let bitcoin = 302.765


function desativarBotao(){
    if(parseFloat(inputMoeda.value) <= 0  ){
        alert.style="display:inline"
        alert.innerHTML="VALOR INVALIDO"
        setTimeout(function(){
            alert.style="display:none"
            
        },2000)
        console.log('VALOR INVALIDO')
        convert.classList.add('convert')
        convert.classList.remove ('btOn')
        convert.setAttribute('disabled','')
        
        
    }
}


function ativarBotao(){
    


    if(parseFloat(inputMoeda.value) > 0 ){
        console.log('ativar botao')
        convert.classList.remove('convert')
        convert.classList.add ('btOn')
        convert.removeAttribute('disabled')
    }
}

convert.addEventListener('click',function(){
    console.log("APERTOU")


    //verificando qual moeda foi selecionada
    
    for(let i = 0; i <radios.length; i++){
        if(radios[i].checked){
            moedaSelecionada = radios[i].value
            console.log(moedaSelecionada)
        }
    }

    converter()
    
})
    
function converter(){
    valorConvert = parseFloat(inputMoeda.value)
    let real = valorConvert
    if(!isNaN(real) && real>0 ){
        
        switch(moedaSelecionada){
            case 'dolar':
                real/=dolar
                console.log( real.toFixed(2))
                inputResult.value= `O valor de ${valorConvert} em DOLAR equivale a: ${real.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
            break
                
            case 'euro':
                real /=euro
                console.log( real.toFixed(2))
                inputResult.value= `O valor de ${valorConvert} em EURO equivale a: ${real.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`

            break
                    
            case 'bitcoin':
                real /= bitcoin
                console.log( real)
                inputResult.value= `O valor de ${valorConvert} em BITCOIN equivale a: ${real}`
            break
            
            default:
            inputResult.value= `O valor de ${valorConvert} em REAL equivale a: ${real.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
                    
            }
        }
        
    }

function verificaRadio(){
    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            moedaSelecionada = radios[i].value
            return true
        }
    }
    return false
}

limpar.addEventListener('click', function(){
        inputMoeda.value=""
        convert.setAttribute('disabled','')
        inputResult.value=`Informe o valor, escolha a moeda e clique em Converter`
        for(let i = 0; i < radios.length; i++){
            radios[i].checked = false;
        }
})