let form = document.querySelector('#formulario')
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')

let title =document.querySelector('#title')

let imc

let btenviar = document.querySelector('#submit')
let btlimpar = document.querySelector('#limpar')
let cxImc = document.querySelector('#cxImc')


let cxResult = document.querySelectorAll('.pessoa')


btenviar.addEventListener('click', function() {
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    
    imc = (peso/(altura*altura)).toFixed(1)

    event.preventDefault()
    
    pessoa = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        status: estatosImc(imc)
    }

    title.style="display:flex"

    function estatosImc(imc){
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            return "Peso ideal (parabéns)";
        } else if (imc >= 25.0 && imc <= 29.9) {
            return "Levemente acima do peso";
        } else if (imc >= 30.0 && imc <= 34.9) {
            return "Obesidade grau I";
        } else if (imc >= 35.0 && imc <= 39.9) {
            return "Obesidade grau II (severa)";
        } else if (imc >= 40) {
            return "Obesidade grau III (mórbida)";
        } else {
            return "Valor inválido";
        }
    }

    cxImc.value = `${imc}`
    cxResult[0].textContent = `Nome: ${pessoa.nome}`
    cxResult[1].textContent = `Idade: ${pessoa.idade}`
    cxResult[2].textContent = `Peso: ${pessoa.peso}`
    cxResult[3].textContent = `Altura: ${pessoa.altura}`
    cxResult[4].textContent = `Status IMC: ${pessoa.status}`
    

})



btlimpar.addEventListener('click', function(){
    cxNome.value = ""
    cxIdade.value = ""
    cxPeso.value = ""
    cxAltura.value = ""

    title.style="display:none"

    cxResult.forEach(function(element) {
        element.textContent = "";
    });

    cxImc.value = `0.0`
})