// Crie uma função para verificar se um valor é Truthy



function  verificarValor(valor){
     if(verificarValor === true){
         return true; // console.log("truthy");
     }else if(verificarValor === 1){
         return true;  console.log("truthy");
     }else if(verificarValor === ''){
          return true; //  console.log("truthy");
     }else if (verificarValor=== 'João Victor'){
         return true;  //  console.log("truthy");
     }else{
           console.log("falso");
     }
}
console.log(verificarValor(1));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function calcularArea(valor){
     return valor * 4;
}
console.log(calcularArea(3));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("joao", "gomes"));

// Crie uma função que verifica se um número é par
function verificarPar(valor){
     if(valor % 2 == 0){
          console.log("VALOR É PAR");
     }else{
          console.log("VALOR É ÍMPAR");
     }
}
console.log(verificarPar(3));
console.log(verificarPar(4));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verNome(nome){
     if(typeof nome !== 'João'){
          return 'informe o nome correto';
     }else{
          return 'Nome correto';
     }     
}
console.log(verNome('joao'));
console.log(verNome("João"));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);
