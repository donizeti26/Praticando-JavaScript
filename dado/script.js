let numUp = document.querySelector('#rNumber')
let dadoImg = document.querySelector('#dadoImg')
let sortear = document.querySelector('#sortear')
let somDado = document.querySelector('#dadoRolando')

let numRandom = 0


sortear.addEventListener('click', function(){
    
    dadoImg.classList.add("animate")
    sortear.style="display:none"
    somDado.play()
    numUp.innerHTML=`?`

    setTimeout(function(){

        sortear.style="display:inline"
        numRandom = gRandom(1,7)
        dadoImg.src = `dado/${numRandom}.png`
        numUp.innerHTML=`${numRandom}`
        
        dadoImg.classList.remove("animate")
    }, 1700)
    
    
})


function gRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
     
}