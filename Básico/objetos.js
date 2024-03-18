//Objeto iteral  {}

const pessoa1 = {
    nome: 'Jucinei',
    sobrenome: "Belo",
    idade: 34,
}

const pessoa2 = {
    nome: 'Jucinei',
    sobrenome: "Belo",
    idade: 34,

    fala() {
        return `${this.nome} está falando oi`
    }
}

const testando = pessoa2.fala();
console.log(testando)

//Função para criar objeto

function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const camila = criaPessoa("Camila", "Pierog", 33);
const jucinei = criaPessoa("Jucinei", "Belo", 34);
const isabela = criaPessoa("Isabela", "Bertan", 15)

console.log(camila.nome, isabela.idade, jucinei.nome)