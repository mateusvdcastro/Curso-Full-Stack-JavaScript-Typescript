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

console.log("===========================NUMBERS==========================");

let num1 = 0.7; // number
let num2 = 0.1; // number

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2));  // arredondamento para 2 casas decimais 

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));


// console.log(num1.toString() + num2);  // converter um número para string
// num1 = num1.toString();
// console.log(num1.toString(2));
// console.log(num1.toFixed(2));
// console.log(Number.isInteger(num1));   // ver se um num é um inteiro
// console.log(Number.isNaN(temp));  // retorna true caso uma conta seja possível
// let temp = num1 + '5';
// console.log(temp);


console.log(!!(100 / 0));

// let num2 = Math.floor(num1);
// let num2 = Math.ceil(num1);
// let num2 = Math.round(num1);
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));  // retorna a maior num
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// const aleatorio = Math.round(Math.random());  // gera um num aleatório entre 0 e 1 
console.log(Math.PI);
console.log(Math.pow(2, 10));
