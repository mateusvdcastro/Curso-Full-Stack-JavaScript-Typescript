// crie um arquivo html, edite-o, abra o inspecionar do chrome e vá no console

//alert();   abreviação de window.alert(), axibe uma caixa de alerta
//prompt();  abre a caixa e pede que o usuário informe algum texto
//confirm();   abre a caixa e pergunta algo ao usuário para que responda com sim ou não

/*
const confirma = confirm("Você gosta de chocolate");
console.log(confirma);  

se o usuário digitar "sim" confirm retorna true, se "não" false   */


console.log("============================================================");
// caso tenha dúvidas veja documentação da w3schools ou mdn  !!!!!

let umaString = 'Meu valor';

// os /  /  são conteúdo de expressões regulares !!!!!!!!!!!!!!!

// Caractere de escape \
console.log(umaString.charAt(-1)); // Retorna o valor da pos
console.log(umaString.charCodeAt(4)); // Retorna o código inteiro que repsetanta o valor na tabela asc
console.log(umaString.concat(' ', 'ei', ' ', 'sister')); // raramente usado
console.log(umaString.indexOf('e', 0)); // Retorna o índice a partir do index 0
console.log(umaString.lastIndexOf('e', umaString.length)); // Retorna o índice
console.log(umaString.match(/[A-Za-z]+/g)); // Retorna um array com os valores encontrados (se g)
console.log(umaString.search(/[a-z]+/g)); // Retorna o índice da primeira ocorrência
console.log(umaString.replace(/e/g, '3'));
console.log(umaString.slice(2, 7));  // pega uma fatia da string
console.log(umaString.slice(-3, -1));
console.log(umaString.split(' ', 2));  // vai dividir a string por espaços duas vezes
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
console.log(umaString.length)  // retorna o tamanho da string
