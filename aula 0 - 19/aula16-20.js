//               0       1        2          3      4
let alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo 
alunos = 123;

console.log(typeof alunos);
console.log(alunos instanceof Array);  // retorna true se a variável for um array

alunos.push('Luiza');  // adiciona no final do array
const removido = alunos.pop();  // remove o ultimo
const removido2 = alunos.shift(); // remove no começo

// console.log(alunos.slice(0, -2));

console.log(alunos[50]);  // retorna undefined

// delete alunos[1];
// console.log(alunos[1]);

// const removido = alunos.shift();
// console.log(removido);
// console.log(alunos);

// alunos.unshift('Fábio'); // Adiciona no começo do array
// alunos.unshift('Luiza');


// alunos.push('Luiza'); // Adiciona no fim
// alunos.push('Fábio');

// alunos[alunos.length] = 'Luiza';  // Adiciona no fim
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// alunos[0] = 'Eduardo'; // Altera
// alunos[3] = 'Luiza'; // Adicionando

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);

console.log("============================================================");

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
  
    fala() {
      console.log(`A minha idade atual é ${this.idade}.`);
    },
  
    incrementaIdade() {
      this.idade++;
    }
  };
  
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
