window.alert("Bem vindo a pagina calcula número.");
const confirmaCalculo = window.confirm("Deseja fazer um calculo?");

if (confirmaCalculo) {
  const numero = Number(window.prompt("Insira um número qualquer?"));
  document.getElementById("numero-titulo").innerHTML += `O número escolhido foi: <strong> ${numero} </strong><br/>`;
  document.getElementById("raiz-quadrada").innerHTML += `<stronng>${numero}</strong> Raiz quadrada: <strong> ${Math.sqrt(numero)} </strong><br/>`;
  document.getElementById("e-nan").innerHTML += `É NaN <strong>${Number.isNaN(numero)}<strong/><br/>`;
  document.getElementById("para-baixo").innerHTML += `Arredondamento para baixo <strong>${Math.floor(numero)}</strong><br/>`;
  document.getElementById("para-cima").innerHTML += `Arredondamento para cima <strong>${Math.ceil(numero)} </strong><br/>`;
  document.getElementById("duas-casas").innerHTML += `Com duas casas decimais <strong>${(parseFloat(numero).tofixed(2))}</strong><br/>`;
} else {
  window.alert("Agradecemos por utilizar nossos serviços.");
}