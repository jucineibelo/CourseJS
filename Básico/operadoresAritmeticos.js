/**
* OPERADORES ARITMÉTICOS 

 Adição ou Concatenação=  + 
 Potenciação=  **           
 Resto da divisão %         

*/

let num1 = 7
let num2 = 9

resultado = num1 + num2 * 10
console.log(resultado)

resultado = (num1 + num2) * 10
console.log(resultado)


/**
* OPERADORES DE INCREMENTO

pós-fixado         pré-fixado          

incremento++      ++incremento   
decremento--      --decremento   

*/


//OPERADORES DE ATRIBUIÇÃO

let contador = 0;
contador += 2
contador += 2
contador *= 5
console.log(contador)

contador = 2;
contador **= 10
console.log(contador)


//NaN = not a number
let num3 = 10
let num4 = 'teste'
resultado = num3 * num4
console.log(resultado)

//Js conveteu e calculou
num3 = 7
num4 = '100'
resultado = num3 * num4
console.log(resultado)

//A converção correta seria parseInt()
num3 = 7
num4 = parseInt('100')
resultado = num3 * num4
console.log(resultado)



