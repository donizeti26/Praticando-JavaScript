let InputNumero = document.querySelector('#InputNumero')
let btnChutar = document.querySelector('#btnChutar')
let btnSong = document.querySelector('#btnSong')
let LoadMusic = document.querySelector('#music')
let aviso = document.querySelector("#aviso")
let msg = document.querySelector('#text')
let bteload = document.querySelector('#brReload')
let min = 1
let max = 10
let numAlet = 0


function gerarNum(){

    numAlet = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(Number(numAlet))
}

btnChutar.addEventListener('click', function(){
    if(Number(InputNumero.value) == numAlet){

        msg.setAttribute('id','msg-right')
        msg.innerHTML=`-PARABÉNS-<br> NUMERO CORRETO`
        btReload.style="display:inline"

    }else if (Number(InputNumero.value) > numAlet){

        msg.setAttribute('id','msg-atention')
        msg.innerHTML=`-AINDA NÃO-<br> NUMERO DIGITADO É MAIOR`
        InputNumero.value=``
        setTimeout(function(){
        msg.innerHTML=``

            msg.removeAttribute('id','msg-atention')

        },1750)

    }else if (Number(InputNumero.value) < numAlet){
        msg.setAttribute('id','msg-atention')
        msg.innerHTML=`-AINDA NÃO-<br> NUMERO DIGITADO É MENOR`
        InputNumero.value=``
        setTimeout(function(){
            msg.innerHTML=``
    
                msg.removeAttribute('id','msg-atention')
    
            },1750)

    }else{
        msg.setAttribute('id','msg-erro')

        msg.innerHTML=`-PARABÉNS-<br> NUMERO CORRETO`
    InputNumero.value=``
    setTimeout(function(){
        msg.innerHTML=``

            msg.removeAttribute('id','msg-erro')

        },1750)

    }

})


function reload(){
    window.location.reload(true);
}

//ativando botao 

function ativarBotao(){
    btnChutar.removeAttribute("disabled", "")

}

//desativando botao 
function bloquearBotao(){
    btnChutar.setAttribute("disabled", "");

}

//validando numero
function validarNumero(num){
    if(num.value <= 0 || num.value > 10){
        console.log('NUMERO INVALIDO')
        msg.setAttribute('id','msg-erro')
        InputNumero.value=``
    msg.innerHTML=`-ATENÇÃO-<br> NUMERO DIGITADO É INVALIDO`
        bloquearBotao()
        setTimeout(function(){
            msg.innerHTML=``
            msg.removeAttribute('id','msg-erro')


        },2000)

    }else{
        ativarBotao()
    }
}

//para ou ativar musica


function pausarAtivarMusic(){
    if(music.muted){
        music.muted =false;

    }else{
        music.muted = true;
        
    }
}