/*Array é como una lista ou coleção de coisas*/

// nesse exemplo o array contem uma coleção com varios tipos de dados nos indices (esse tipo de array não é recomendado)
let exemplo = [true, 12360, "Jose", "Maria", null]

//Array com uma lista de strings (assim é recomendado)
//               0          1         2                 
const aluno = ["Jucinei", "Camila", "Jose"];
console.log(aluno)

////////////////////////////////////////////////////////////////////
//array de strings

const nomes = ["Otavio", "Luiz", "Ricardo", "Cezar", "Christian", "Roni"]  

nomes[0] = "Gustavo"  //substituindo a posição 0 do array

nomes[3] = "Marina"  //adicionando uma strings a um indice que nao existia gora existe como ultimo indice

nomes[nomes.length] = "João" //adicionando uma string ao final do array
nomes[nomes.length] = "Fernando"

nomes.push("Matheus")  //função para adicionar um indice ao final do Array

nomes.unshift("Andreas")  //função para adicionar um indice ao inicio do Array

console.log(nomes)

nomes.shift()                       // função para remover o primeiro indice
let primeiroIndice = nomes.shift() // removendo o primeiro indice e guardando em uma variavel 
console.log(primeiroIndice)

nomes.pop()                     // função para remover o ultimo indice
let ultimoIndice = nomes.pop() // removendo o ultimo indice e guardando em uma variavel 
console.log(ultimoIndice)

delete nomes[3]  //deletando a posição do indice

console.log(nomes.slice(0, 2))  //buscando as posições por fatiamento

console.log(typeof nomes)  //vai dizer que é um objeto ou seja array é um objeto de indexação
console.log(nomes instanceof Array) // se retornar verdadeiro é porque é um array
