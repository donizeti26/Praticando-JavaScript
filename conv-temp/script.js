let inptCe = document.querySelector('#inptCe')
let rgCe = document.querySelector('#rgCe')

let inptFa = document.querySelector('#inptFa')
let rgFa = document.querySelector('#rgFa')

let inptKe = document.querySelector('#inptKe')
let rgKe = document.querySelector('#rgKe')

let limpar = document.querySelector('#btn-limpar')


function tempConvert(){
    
    let valueCe = parseFloat(rgCe.value)
    let valueFa = (parseFloat(rgCe.value) * 1.8) + 32;
    
    let valueKe = parseFloat(rgCe.value) + 273.15;
    
    
    rgFa.value = valueFa.toFixed(2)
    rgKe.value = valueKe.toFixed(2)

    inptCe.value = valueCe.toFixed(2)
    inptFa.value = valueFa.toFixed(2)
    inptKe.value = valueKe.toFixed(2)


}



limpar.addEventListener('click', function(){
    rgCe.value = 0.0
    tempConvert()

})