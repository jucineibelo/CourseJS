//para chamar a classe no querySelector, usa-se querySelector('.class')
//para chamar a id no querySelector, usa-se querySelector('#id')

function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoa = [];

  function recebeEventoForm(evento) {
    evento.preventDefault(); //para pagina não atualizar

    const nome = document.querySelector(".nome");
    const sobrenome = document.querySelector(".sobrenome");
    const peso = document.querySelector(".peso");
    const altura = document.querySelector(".altura");

    pessoa.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoa);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<p>`;
  }
  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();