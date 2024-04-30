"
let cal = document.querySelector('#calcular')
let limp = document.querySelector('#limpar')

let cxNota1 = document.querySelector('#Nota1')
let cxNota2 = document.querySelector('#Nota2')
let cxMedia = document.querySelector('#media')
let stf = document.querySelector('.stf')
let stat
let msg = document.querySelector('#alert')



//CALCULANDO A MEDIA
cal.addEventListener('click', function(e){

    let n1 = parseFloat(cxNota1.value);
    let n2 = parseFloat(cxNota2.value);
    let md = (n1 + n2)/2
    
    cxMedia.value =(Number(md))
    stf.value = String(statusmedia(md))

// ADICIONANDO ESTILIZAÇÃO
    switch(String(statusmedia(md))){
        case "APROVADO":
        stf.classList.remove("padrao")
        stf.classList.add('aprovado')
        break
        case "RECUPERAÇÂO":
            stf.classList.remove("padrao")
            stf.classList.add('recuperacao')
        break
        case "REPROVADO":
            stf.classList.remove("padrao")
            stf.classList.add('reprovado')
        break
        default:
    }
    e.preventDefault()



})

// DEFININDO STATUS DA MEDIA

function statusmedia(md){
    if(md>=6 && md<=10){
        return "APROVADO";
    }else if(md==5){
        return "RECUPERAÇÂO";
    }else if(md<5){
        return "REPROVADO"
    }
}

//VALIDANDO O NUMERO E SE ESTIVER INCORRETO MANDO MESAGEM DE 2 SEGUNDOS

function validarNumero(num){

    if(num.value < 0 || num.value>10){
        msg.innerHTML ='<p>Digite uma nota entre 0.0 e 10.0</p>'
        msg.style='display:block'
        setTimeout(function(){
        msg.textContent =''
        msg.style='display:none'
        num.value=''
        },2000)
    }

}
// LIMPANDO CAMPOS
limp.addEventListener('click', function(){
    cxNota1.value=''
    cxNota2.value=''
    cxMedia.value=''
    stf.value='Situação Final'


    // VERIFICANDO SE CONTEM VARIAVEL E ALTERANDO
    if(stf.classList.contains('aprovado')){
        stf.classList.remove('aprovado')
        stf.classList.add('padrao')

    }else if(stf.classList.contains('recuperacao')){
        stf.classList.remove('recuperacao')
        stf.classList.add('padrao')
    }else if(stf.classList.contains('reprovado')){
        stf.classList.remove('reprovado')
        stf.classList.add('padrao')
    }


})


//CLASSIFICANDO SITUAÇÃO
"