/* 
Primitivos (imutáveis)- string, number, boolean, undefined,
null (bigint, symbol)  - Valores copiados

Referência (mutavél) - array, object, function - Passados por referência
*/

const a = 5 
const b = a 
const c = b
console.log(c)  //valor copiados


const d = [1, 2 , 3]
const e = d
const f = e
f.push(666)  //passado por referencia então afetou o local da memoria das duas variaveis

console.log(f) 
console.log(d)


//Objeto passado por referência tbm
const g = {
    nome: 'Jucinei',
    idade: 34
}

const h = {... g}   //fazendo spred ... mantém o valor de g
h.nome = 'Camila'

console.log(h)
console.log(g)