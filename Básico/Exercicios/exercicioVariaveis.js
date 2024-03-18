//O exericio consiste em fazer a 
//varA ser B
//varB ser C
//varC ser A

let varA = "A";
let varB = "B";
let varC = "C";

////////////////////////////////////////////////////////////
//RESOLVI CRIANDO UMA VARIAVEL TEMPORARIA

// temporaria = varA
// varA = varB
// varB = varC
// varC = temporaria

// console.log(varA)
// console.log(varB)
// console.log(varC)

////////////////////////////////////////////////////////////
//OUTRO METODO PARA RESOLVER É COM MATRIZ

[varA, varB, varC] = [varB, varC, varA];

console.log(varA)
console.log(varB)
console.log(varC)



