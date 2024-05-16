let array = [2,5,74,1,2,0,41,2]

let tamArray = array.length

for(let i = 0; i < tamArray -1; i++){
    let minIndex = i
    for(let j = i + 1;j<tamArray; j++){
        if(array[j] < array[minIndex]){
            minIndex = j
        }
    }

    if(minIndex !== i){
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
}

console.log(array)