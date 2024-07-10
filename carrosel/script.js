let listOne = document.querySelectorAll('#listOne li')
let listTwo = document.querySelectorAll('#listTwo li')

let numVideos = document.querySelectorAll('.numVideos')


numVideos[0].textContent = listOne.length
numVideos[1].textContent = listTwo.length