// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUSuario = 1000;

/*
if (pontuacaoUSuario > 1000){
    console.log("Usuário VIP");
} else {
    console.log("Usuário Comum")
}
*/

const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
// note que toda a parte comentada foi reduzida em uma única linha

const corUsuario = 'Pink';  // se aqui fosse null a corPadrao seria preta
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
