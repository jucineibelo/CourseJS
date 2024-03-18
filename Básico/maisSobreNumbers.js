let num1 = 1;  //number
let num2 = 2.5  //number 
num1 = num1.toString()  //convertendo number para string

let num3 = 10.6546456
console.log(num3.toFixed(2))  //função para definir as casas decimais
console.log(Number.isInteger(num3)) //função que retorna um booleano se é inteiro



//IEEE 754-2008 padrão do JS faz os calculos com virgula não ser precisos. uma calculo necessita ser convertido para ser preciso
let num4 = 0.7
let num5 = 0.1
let soma = num4 + num5 
console.log(soma)    // ao inves de dar 0.8 o resultado foi impreciso 0.799999999999

soma = parseFloat(soma.toFixed(1)) // foi necessario converter com o parse e depois usar tofixed para diminuir as casas decimais
console.log(soma)