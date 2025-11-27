// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var meusDados = {
     nome: 'João Victor',
     sobrenome: 'Gomes De Souza',
     idade: 22,
     natural: 'Rio De Janeiro',
     moraEm: 'Sorocaba',
     profissao: 'Analista de Sistemas'
}
console.log(meusDados);
// Crie um método no objeto anterior, que mostre o seu nome completo
meusDados.nomeCompleto = function(){
     return `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 300;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro={
     raca:'labrador',
     cor:'preto',
     idade: 10,
     latir(pessoa){
          if (pessoa == 'homem'){
               return 'latir';
          }else{
               return 'nada';
          }
     }
}
cachorro.latir('homem');
cachorro.latir('mulher');
console.log(cachorro.latir('homem'));
console.log(cachorro.latir('mulher'));

