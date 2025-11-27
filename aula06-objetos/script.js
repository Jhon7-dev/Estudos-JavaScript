// objetos
// conjunto de variáveis e funções, que são chamadas de propriedades e métodos.


var pessoa = {
     nome: 'joao',
     idade: 22,
     cidade: 'Rio'

}
console.log(pessoa);

// métodos 
//  é uma propriedade que possui uma função no local do seu valor


var quadrado = {
     lados: 4,
     area: function(lado){
          return lado * lado;
     },
     perimetro: function(lado){
          return lado*4; 
     }
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(Math.random);

// criar um "OBJETO"
// um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'


// Dot notation get 
// dot = ao '.'
// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
     width:800,
     heigth:50,
     backgroundColor: '#84E',
}
var bg = menu.backgroundColor; // '#84E'


// Adicionar Propriedades e Métodos 
// Basta adicionar um novo nome e definir o valor.

var menu = {
     width: 900,
}
menu.heigth = 50;
menu.position = 'fixed';

// Palavra-chave this 
// this irá fazer uma referência ao próprio objeto 
var heigth = 120;
var menu = {
     width: 800,
     heigth:50,
     metadeHeigth(){
          return this.heigth/2; //  o this vai acessar o obejto dentro do método
     }
}

menu.metadeHeigth(); // 25
// sem o this, seria 60

//Protótipo e Herança 
// o objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo

var menu = {
     width: 800,
}
menu.hasOwnProperty('width')// true
menu.hasOwnProperty('height')// false
console.log(this.hasOwnProperty('height'));
console.log(this.hasOwnProperty('width'));
var pessoa = {
     nome: 'joao'
}
console.log('joao'.length);

// hasOwnProperty é um método de Object