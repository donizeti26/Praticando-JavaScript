let ulsElis = document.querySelectorAll(`ul li`)

let numDeItem = 3

let list1 = document.querySelectorAll('#list1 li')
let list2 = document.querySelectorAll('#list2 li')
let list3 = document.querySelectorAll('#list3 li')

let numDeVideos = document.querySelectorAll('.numDeVideos')
numDeVideos[0].textContent = list1.length
numDeVideos[1].textContent = list2.length
numDeVideos[2].textContent = list3.length


function show(index, indexList) {
  let n = index
  numDeItem = numDeItem + index


  let listUl = document.querySelector('#list' + indexList)
  let toMove = 400

  let positionXRight = toMove
  let positionXLeft = -toMove

  if (index == +1) {
    listUl.scrollBy(positionXRight, 0)
  }
  if (index == -1) {
    listUl.scrollBy(positionXLeft, 0)
  }
}