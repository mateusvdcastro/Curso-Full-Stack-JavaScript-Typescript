const string1 = '10';
const string2 = '25';
const string3 = '42.85';
const int = parseInt(string1);  // converte em numero
const int2 = Number(string2);
const int3 = parseFloat(string3);
console.log(int, int2, int3);
console.log(typeof int,typeof int2,typeof int3);

console.log("---------------------------------");

console.log('Esta função imprime na tela');
let nome = 'Mateus';
let sobrenome = 'castro';
const num = 6;  // definir variáveis constantes
let num2 = 2;  // let define variáveis
num2 = 5;
console.log(num * num2,"=>", nome, "note que num2 se alterou para:", num2);

console.log("---------------------------------");

console.log(typeof num2);
console.log(nome + sobrenome);  // concatenação de strings

console.log("---------------------------------");

const idade = 19;
const peso = 63;
const alturaEmM = 1.76; 
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;  // undefined => por hora não aponta para nenhum local na memória
let variávelNula = null; // undefined porem explícita 
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;
 
// template strings
 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

console.log("---------------------------------");

let contador = 1;
contador ++;
++contador;
contador ++;
console.log(contador);

console.log("---------------------------------");

let contador2 = 2;
contador2 **= 10;  // exponenciação
console.log(contador2);
