let content = document.querySelector('.content')

function carregarDados(){

fetch('data.json')
.then(response => {
    if(!response.ok){
        throw new Error ('Erro ao carregar arquivo JSON' + response.statusText)
    }
    return response.json()
})
.then(data => {

    atribuirDados(data)
})
.catch (error => {
    console.log('Ocorreu um erro' + error)
})

}


function atribuirDados(data) {

    data.personagens.forEach(item => {
        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement ('img')
        img.setAttribute('id','img')
        img.src = item.perfil



        const nome = document.createElement ('p')
        nome.setAttribute('id','nome')
        nome.textContent = `Nome: ${item.nome}`
        
        const altura = document.createElement ('p')
        altura.setAttribute('id','altura')
        altura.textContent = `Altura: ${item.altura}`

        const peso = document.createElement ('p')
        peso.setAttribute('id','peso')
        peso.textContent = `Peso: ${item.peso}`

        const idade = document.createElement ('p')
        idade.setAttribute('id','idade')
        idade.textContent = `Idade: ${item.idade}`

        const kanji = document.createElement ('p')
        kanji.setAttribute('id','kanji')
        kanji.textContent = `Kanji: ${item.kanji}`

        const genero = document.createElement ('p')
        genero.setAttribute('id','genero')
        genero.textContent = `Genero: ${item.genero}`

        card.appendChild(img)
        card.appendChild(nome)

        card.appendChild(altura)
        card.appendChild(peso)
        card.appendChild(idade)
        card.appendChild(kanji)
        card.appendChild(genero)

        content.appendChild(card)
    });
}

window.onload = carregarDados()