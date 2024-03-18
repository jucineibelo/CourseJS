//MATH - MATEMATICA

let num1 = 9.54587

let num2 = Math.floor(num1) //arredondamento para baixo
console.log(num2)
num2 = Math.ceil(num1)  //arredondamento para cima
console.log(num2)

num2 = Math.round(num1)  //arredondamento 
console.log(num2)

console.log(Math.max(1, 2, 3, 4, 5, 6)) //retorna o maior número
console.log(Math.min(1, 2, 3, 4, 5, 6)) //retorna o menor número

console.log(Math.pow(2,3))  //Elevação de expoente decimal 

console.log(Math.sqrt(9))  //Raiz quadrada

let aleatorio = Math.random() * 100    //função random retora um número aleatório
aleatorio = aleatorio.toFixed(0)
console.log(aleatorio)
