// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}
function Pessoa(nome,idade){
     this.nome = 'Nome';
     this.idade = 0;
     console.log(this.nome + ' deu uma andada');
}
const marcos = new Pessoa();
marcos.idade = 12;
marcos.nome = 'Marcos'

console.log(marcos)



// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
function seresHumanos(nome,idade){
     this.nome = 'Nome';
     this.idade = 0;
     // console.log(this)
}
const joao = new seresHumanos()
joao.idade =22;
joao.nome = 'João Victor Gomes de Souza'
console.log(joao)
const janaina = new seresHumanos()
janaina.idade = 20;
janaina.nome = 'Janaína Letícia'
console.log(janaina)
const carmem = new seresHumanos()
carmem.idade = 42;
carmem.nome = 'Carmem Lúcia'
console.log(carmem)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

