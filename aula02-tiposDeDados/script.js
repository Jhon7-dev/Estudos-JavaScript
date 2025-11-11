/*7 TIPOS DE DADOS */
//todos são primitivos exceto "OBJETO"

 var nome = 'André'; // String
 var idade = 28; // Number
 var possuiFaculdade = true; //Boolean
 var time; //Undefined
 var comida = null; //null
 var simbolo = Symbol()//Symbol
 var novoObjeto = {}//Object


 /*=== Verificar um tipo de Dado === */
 var nome ='fernanda';
 console.log(typeof nome);
// retorna uma STRING


var nome = 'joao';
var idade = 22;

console.log(typeof idade);
console.log(typeof nome);


var nome = 'joao';
var sobreNome = 'gomes';
var nomeCompleto = nome +' '+ sobreNome;
console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(typeof frase);

var ano = '2018 ';
var mes = 9;
console.log(ano + mes);

/* ASPAS DUPLAS,SIMPLES E TEMPLATE STRING */
//'JAVA É "super" fácil';
//"JAVA É 'super' fácil";
//"JAVA É \"super\" fácil";
//"JAVA É "super" fácil"; //Invalido, não pode ter aspas duplas dentro de aspas duplas
 //
var melhor = 'teste';
var frase1 =  "Esse é o \"melhor\"  jogo"



/* === Template String === */
//deve passar expressões,variáveis dentro de ${}


var frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2);


//somando número com String
var gols = 1000;
var frase1 = 'Romário fez' + gols + ' gols';
console.log(frase1);



/*Exercício 02 */

//Declare uma variável contendo uma String
var nome = 'joao';
console.log(typeof nome);

//Declare uma variável contendo um número dentro de uma String
var anoAtual = '2025';
console.log(typeof anoAtual);

//Declare uma variável com a sua idade
var minhaIdade = '22';
console.log(minhaIdade);

//Declare duas variáveis, uma com  seu nome
// e uma com seu sobrenome e some as mesmas
var meuPrimeiroNome = 'João ';
var sobreNome = ' Gomes';
console.log(nome + sobreNome);

//Coloque a seguinte frase em uma variável: it´s time
var frase01 = `it´s time`;
console.log(frase01);

//Verifique o tipo da variável que contém o seu nome
console.log(typeof meuPrimeiroNome, typeof sobreNome);
