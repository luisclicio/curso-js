var now = new Date()
var weekDay = now.getDay()

/*
	Domingo - 0
	Segunda - 1
	Terça - 2
	Quarta - 3
	Quinta - 4
	Sexta - 5
	Sábado - 6
*/

switch(weekDay) {
	case 0:
		console.log("Domingo")
		break
	case 1:
		console.log("Sábado")
		break
	case 2:
		console.log("Terça")
		break
	case 3:
		console.log("Quarta")
		break
	case 4:
		console.log("Quinta")
		break
	case 5:
		console.log("Sexta")
		break
	case 6:
		console.log("Sábado")
		break
	default:
		console.log("ERRO")
		break
}
