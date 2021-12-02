// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

/*
$ addEventListener() - registra uma única espera de evento em um único alvo. O alvo do evento (en-US) pode ser um único elemento (en-US) em um documento, o documento (en-US) em si, uma janela (en-US), ou um XMLHttpRequest.
*/

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');  // recebendo os inputs do
  // ID peso e depois altura
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {  // se não peso === !peso  (! funciona como negação)
    setResultado('Peso inválido', false);
    return;  // lembre-se que, se um return de uma função for executado,
    // nada mais abaixo da função será executado
  }

  if (!altura) {
    setResultado('Altura inválida', false);  // para colocar o fundo vermelho
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);  // arredondar
}

function criaP () {
  const p = document.createElement('p');  // cria um parágrafo
  return p;
}

function setResultado (msg, isValid) { // adiciona informações na minha div com id resultado
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();
  const p1 = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');  // criando a classe 
    // "paragrafo-resultado" no elemento p (parágrafo), ela será chamada no
    // style.css como .paragrafo-resultado{} e configurada
    p1.classList.add('agradecimento');
    p1.innerHTML = 'Obrigado por usar a nossa calculadora = ) ';
  } else {
    p.classList.add('bad');  // cria a classe .bad que será configurada no css
  }

  p.innerHTML = msg;
  resultado.appendChild(p);  // adicionando no ID resultado o filho p
  resultado.appendChild(p1);
}
