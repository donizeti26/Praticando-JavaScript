let ulsElis = document.querySelectorAll(`ul li`)
let numDeVideos = document.querySelectorAll('.numDeVideos')
let grupFrame = document.querySelector('#grupFrame')
let iframeVideo = document.querySelector('#iframeVideo')
let bodyPage = document.querySelector("body")
let sectionModal = document.querySelector(".newModal")

let ul1 = document.querySelector('#list1')
let ul2 = document.querySelector('#list2')
let ul3 = document.querySelector('#list3')



const url = 'videos.json'

function getDataByCategory(categorieId, list) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar o arquivo JSON;' + response.statusText)
      }
      return response.json()
    }).then(dados => {
      console.log(dados)
      let quantOfVideos = dados.videos.length

      for (let y = 0; y < quantOfVideos; y++) {
        if (dados.videos[y].categorieId == categorieId) {
          criarLiImg(categorieId, dados.videos[y].videoId, list)
        }
      }




    })
    .catch(error => { console.log('Error ao carregar os dados', error) })
}

getDataByCategory(1, ul1)
getDataByCategory(2, ul2)
getDataByCategory(3, ul3)

function criarLiImg(categoriaId, idVideo, nLista) {
  let list = nLista
  // LI
  let item = document.createElement("li")
  //console.log(item)
  list.appendChild(item)

  let imagem = document.createElement("img")
  imagem.setAttribute('src', `https://img.youtube.com/vi/${idVideo}/maxresdefault.jpg`)
  imagem.setAttribute('class', 'capa-thumb')
  imagem.setAttribute('onClick', `openModal("${idVideo}")`)
  item.appendChild(imagem)

}
grupFrame.addEventListener("click", () => {
  if (bodyPage.classList.contains("newModalOn"))
    openOrCloseVideo()
})
let numDeItem = 5
/*list = []
for (let x = 1; x <= numDeItem; x++) {
  list[x] = document.querySelectorAll('#list' + x + ' li')
}  
*/
function show(index, indexList) {
  let n = index
  numDeItem = numDeItem + index


  let listUl = document.querySelector('#list' + indexList)
  let toMove = 500

  let positionXRight = toMove
  let positionXLeft = -toMove

  if (index == +1) {
    listUl.scrollBy(positionXRight, 0)
  }
  if (index == -1) {
    listUl.scrollBy(positionXLeft, 0)
  }
}


function openOrCloseVideo() {
  if (!bodyPage.classList.contains("newModalOn")) {
    bodyPage.classList.add("newModalOn")
    sectionModal.classList.remove("statusOFF")

  } else {
    bodyPage.classList.remove("newModalOn")
    sectionModal.classList.add("statusOFF")
    iframeVideo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
}

function openModal(videoId) {
  openOrCloseVideo()

  location.href = "#openModal"
  iframeVideo.setAttribute('src', `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1`)
}