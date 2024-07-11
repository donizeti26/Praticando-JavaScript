let listOne = document.querySelectorAll('#lista1 li')
let listTwo = document.querySelectorAll('#lista2 li')

let numVideos = document.querySelectorAll('.numVideos')
let numDeItens = 6

numVideos[0].textContent = listOne.length
numVideos[1].textContent = listTwo.length

function show(indice, indiceLista){

    let listaUl = document.querySelector('#lista'+indiceLista)

    let mover = 550
    let posicaoXDireita = mover
    let posicaoXEsquerda = -mover



    if(indice == +1){
        listaUl.scrollBy({
            left: posicaoXDireita,
            behavior: 'smooth'
        });
    }
    if(indice == -1){
        listaUl.scrollBy({
            left: posicaoXEsquerda,
            behavior: 'smooth'
        });
    }
    console.log('aaaaaa')
}
