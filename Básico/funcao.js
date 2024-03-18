//FUNÇÃO SEM RETORNO
function saudacao(nome) {
  console.log(`Bom dia, ${nome}!`);
}

saudacao("Jucinei");

//FUNÇÃO COM RETORNO
function saudacao2(nome) {
  return `Bom dia, ${nome}!`;
}

let guardaValor = saudacao2("Camila");
console.log(guardaValor);

function soma(x, y) {
  const resultadoSoma = x + y;
  return resultadoSoma;
}

let resultado = soma(6,8)
console.log(resultado)


//FUNÇÃO ANONIMA
const raiz = function(num) {
    return Math.sqrt(num)
};

console.log(raiz(9))

//FUNÇÃO ANONIMA => ARROW FUNCTION
const raiz2 = (num) => {
    return Math.sqrt(num)
};

console.log(raiz2(9))

//ARROW FUNCTION QUANDO SÓ TEM UM PARAMETRO DA PRA SIMPLIFICAR EM UMA SÓ LINHA
const raiz3 = (num) => Math.sqrt(num);

console.log(raiz3(9))