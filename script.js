let min = 0
let max = 100

let chute = 0
let tentativas = 0
let NumEscolhido = 64

function EncontrandoNumero() {
	// body...
	while(min <= max){
		chute = Math.floor((min+max)/2)
		if (chute == NumEscolhido) {
			Console.log("${chute} CORRETO")
            tentativas++

		}else if(chute<NumEscolhido){
			chute = chute + 1
            tentativas++
		}else if(chute>NumEscolhido){
			chute = chute-1
            tentativas++

	}
}

}
EncontrandoNumero()


Console.log("${chute} é o numero escolhido")