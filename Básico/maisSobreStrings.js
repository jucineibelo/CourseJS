//FORMAS DE CONCATEÇÃO DE STRINGS


let umString = "Um texto qualquer"
console.log(umString.concat(" adicinei mais um trecho"))

let outraString = "Um novo texto"
outraString = outraString + ' adicionei mais texto'
console.log(outraString)

let concatMaisModerno = "Uma string com concateção mais moderna"
console.log(`${concatMaisModerno} esse forma de concatenação é mais moderna`)


//PARA DESCOBRIR A POSIÇÃO DE UM INDICE E OUTROS

console.log(concatMaisModerno.indexOf('i', 0))  //descobrindo a posição de i a primeira vez na string 

console.log(concatMaisModerno.lastIndexOf('i')) //descobrindo a ultima posição de i a ultima vez na string

console.log(concatMaisModerno.length) //tamanho

console.log(concatMaisModerno.match(/[a, z]/)) //expressão regular/ encontra os valores da expressão e trás para um array
console.log(concatMaisModerno.match(/[a, z]/g)) //expressão regular

console.log(concatMaisModerno.search(/ç/))  //trás a posição do indice... aceita expressões regulares 

console.log(concatMaisModerno.replace(/c/, '#')); //substitui na string a primeira letra c por #
console.log(concatMaisModerno.replace(/c/g, '#')); //substitui na string todas as letras c por #

console.log(concatMaisModerno.slice(25, 32)) //fatiar a string começa no indice 25 até o indice 32 
console.log(concatMaisModerno.substring(25, 32)) //também fatia a string


let teste = "Essa é uma nova string para testes."
console.log(teste.split(" "))    //A função split divide os valores e coloca em um array.
console.log(teste.split(" ", 2)) //A quantidade de vezes  também pode ser configurada nesse caso trouxe um array com 2 posições
console.log(teste.split("a"))


