/*Números */
var idade = 28;
var gols = 1000;
var pi =3.14 // ponto para decimal
var expoente = 2e10;

console.log(idade);

/* Operadores aritméticos */
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16 
var modulo = 14 % 5; // 4

console.log(soma,subtracao,multiplicacao,divisao,expoente,modulo);

/**Operadores Aritméticos (Strings) */
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2';// 200
var divisao = 'Comprei 10' / 2; // NaN (not a number)

// é possível verificar se uma variável é NaN ou não com a função isNaN()

var testeNaN = 'Isso é 100' / 2;
console.log(isNaN(testeNaN));

// NaN = Not a Number 
var numero = 80;
var unidade ='kg';
var peso = numero + unidade;//'80kg'
var pesoPorDOis = peso / 2; // NaN (Not a Number)

/*A ordem importa  */

var total1 = 20 + 5 * 2;  // 30
var total2 = (20 + 5) * 2; //50
var total3 = 20 / 2*5; // 50
var total4 = 10+10*3+20/2; //40

var soma1 = 10 + 10 +20 + 30 * 4/2 + 10;
console.log(soma1);

// Operadores Aritméticos Unarios
var incremento = 5;
console.log (incremento++);//5
console.log(incremento);//6

var incemento2 = 5;
console.log(++incremento2); // 6
console.log(incemento2); // 6

// O + E - tenta transformar o valor seguite em número 

var frase = 'Isso é um teste';
+frase; // NaN
-frase;//  NaN

var idade = '28';
+idade;//28(número)
-idade;//-28(número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1