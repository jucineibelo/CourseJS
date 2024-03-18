/*Jucinei Luiz Belo, tem 30 anos de idade, pesa 74 KG
tem altura de 1,65 e seu IMC é de XXXXXX.
Jucinei Luiz nasceu em 1989
*/

const nome = "Jucinei Luiz"
const sobreNome = "Belo"
const peso = 74
const altura = 1.65
anoNascimento = 1989
let idade;
let IMC; //peso / (altura * altura) 
let exercicio;

function calculaIdade(anoNascimento) {
  calculo = 2024 - anoNascimento;
  return calculo;
}

function calculaImc(peso, altura) {
    calculo =  peso / (altura * altura);
    return calculo;
}

idade = calculaIdade(anoNascimento);
IMC = calculaImc(peso, altura);


exercicio = nome + ' ' + sobreNome + 'tem ' + idade + ' anos de idade, pesa ' + peso + ' e tem altura de ' + altura 
            + ' e seu IMC é de ' + IMC + ' ' + nome + 'nasceu em ' + anoNascimento;

console.log(exercicio);
