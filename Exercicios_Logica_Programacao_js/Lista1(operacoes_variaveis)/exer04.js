// Receber o ano de nascimento de uma pessoa e mostrar aproximadamente quantos dias de vida ela tem


//   Dtotal = (idade * 365) + B + Dadicionais
const anoBissexto = 5;
const diasAdicionais = 111 ;
const idade = 22;
const anoDeNascimento = 2003;
const anoAtual = 2025

function calculoDeDiasVividos(idade,anoBissexto,diasAdicionais){
     const calculoDedias = (idade * 365) + anoBissexto + diasAdicionais;
     return calculoDedias;
}
console.log(calculoDeDiasVividos(idade,anoBissexto,diasAdicionais));