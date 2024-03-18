// window.alert('Teste ALERT')   //alert retorna udefined

// window.confirm('Deseja mesmo apagar?')  //retorna booleano - false ou true

// window.prompt('Digite seu nome?')  //abre um edt para digitar

let num1;
let num2;
let fazerCalculo;
let resultado;

function calculaSoma(numero1, numero2) {
  return parseFloat(numero1) + parseFloat(numero2)
}

window.alert("Bem vindo a calculadora artificial!!!");
fazerCalculo = window.confirm("Você deseja fazer um calculo de adição?");

if (fazerCalculo) {
  num1 = (window.prompt("Digite o primeiro número?"));
  num2 = (window.prompt("Agora digite um número para somar?"));
  window.alert("O resultado da soma é de: " + calculaSoma(num1, num2));
} else {
  window.alert("Obrigado por utilizar nossos serviços.");
}
