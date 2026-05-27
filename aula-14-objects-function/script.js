// criando um objeto, definir uma variável e iniciar a definição do seu valor com chaves {}.

const carro = {
     marca:'Marca',
     preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 4000;
console.log(carro)
const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 5000;

console.log(carro);

// funções construtoras 
// são responsaveis por construir novos objetos sempre que chamamos a mesma.

function Carro(){
     this.marca = 'Marca';
     this.preco = 0;
}

const ford = new Carro();
ford.marca = 'Ford';
ford.preco = '5000';
console.log(ford)

const toyota = new Carro();
toyota.marca = 'toyota';
toyota.preco = '5060';
console.log(toyota)


// NEW KEYWORD
// a palavra chave "new" é responsavel por criar um novo objeto baseado na função que passarmos a frente dela

// const honda = new Carro();

// // cria um novo objeto
// honda = {};

// // define o prototype 

// honda.prototype = Carro.prototype;

// // aponta a variável this para o objeto

// this = honda;

// // executa a função, substituindo pelo this pelo objeto

// honda.marca = 'Marca';
// honda.preco = 0;

// return honda = {
//      marca:'Marca',
//      preco:0,
// }
// console.log();

//PARÂMETROS E ARGUMENTOS

function Carro(marca,preco){
     this.marca = marca;
     this.preco = preco;
}
const landRover = new Carro('LandRover',50230); // quando faz new você cria um objeto vazio da marca do carro
const volvo = new Carro ('Volvo',23292);
volvo.preco=12333 // quando eu acesso o valor colocando volvo.preco, eu estou alterando
console.log(landRover);
console.log(volvo);


// this keyword
// o this faz referências ao próprio objeto construído com Constructor Function.

function Carro(marca,precoInicial){
     const taxa=1.2;
     const precoFinal = precoInicial * taxa;
     this.marca = marca;
     this.precoInicial = precoFinal;
     console.log(this);
}
const nissan = new Carro('Nissan',2000)
// console.log(nissan);
const bmw = new Carro('BMW',123000);
const mercedes = new Carro('Mercedes-Benz',150000);
const audi = new Carro('Audi',110000);
