// Escopo de funções

function mostrarCarro(){
     var carro = 'bmw';
     console.log(carro);
}
mostrarCarro();
console.log(carro);
// vai dar erro nas duas últimas porque sói funciona dentro do escopo da função "mostrarCarro"

// variável global (erro)

//Declarar variáveis sem a palavra chave "var,let,const", cria uma variável que pode ser acessar em qualquer escopo(GLOBAL). Isso é um erro

function mostrarCarro(){
     carro = 'audi'; // o erro ta aqui
     console.log(carro);
}
mostrarCarro();
console.log(carro);

// Escopo de Função (PAI)
// variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
var carro = 'fusca';

function mostrarCarro(){
     var frase = `meu carro é um ${carro}`;
     console.log(frase);

}
mostrarCarro(); // meu carro é um fusca
console.log(carro) // fusca


// Escopo de bloco

// variáveis criadas com VAR, vazam o bloco. por isso declara as variáveos usando CONST E LET, pois respeitam o escopo do bloco

if(true){
     var carro = 'Fusca';
     console.log(carro);
}
console.log(carro) // Carro

// Var vaza o bloco
// mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined

if(false){
     var carro = 'Fusca';
     console.log(carro);
}
console.log(carro) // erro, carro is not defined

// CONST E LET NO LUGAR DE VAR
// só declarar variáveis com CONST E LET 
if(true) {
  const carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // erro, carro is not defined


// {} Cria um bloco 
// chaves {} criam um escopo de bloco

{
     var carro = 'Fusca';
     const ano = 2018;
}
console.log(carro); // carro
console.log(ano); // erro ano is not defined

// for loop 
// ao utilizar var dentro de um for loop, que é um bloco, o valor a variável  irá vazar e existir fora do loop

for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10

// for loop com let
// com o let evitamos q o número vaze
for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined

//CONST 
//mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código

const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor

const data = {
     dia: 29,
     mes:'Dezembro',
     ano: 2018,
}
data.dia = 29; // funciona 
data = 'Janeiro'; // erro
// Variáveis com valores constantes devem utilizar o const.

//LET 
//mantém o escopo no bloco, impede a redeclação, mas permite a modificação do valor da variável

let ano;
ano = 2018;
ano++;
console.log(ano) // 2019

//let ano = 2020; // erro, redeclarou a variável