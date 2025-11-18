//  ====  Funções ====

// bloco de cód que pode ser executao e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor

// === Exemplo === 

function areaQuadrado(lado){
   
     return lado * lado;
}
console.log(areaQuadrado(2));
console.log(areaQuadrado(10));
console.log(areaQuadrado(5));
console.log(areaQuadrado(3));
areaQuadrado(4)
areaQuadrado(10)
areaQuadrado(5)
// console.log(areaQuadrado)


function pi(){
     return 3.14;
}

var total = 5*pi(); // 15.8

console.log(total)

// ==== parâmetro e argumento ====

// ao criar uma função, você pode definir parâmentros.
// ao executar uma função, você pode passar argumentos

// peso e altura são os parâmetros


function imc(peso, altura){
     const imc = peso / (altura ** 2);
     return imc;
}
imc(80,1.90) // 80 e 1.80 são argumentos
imc(60,1.70) // 60 e 1.70 são argumentos
console.log(imc(80,1.80))


// === parênteses executa a função === 

function corFavorita(cor){
     if(cor === 'Azul'){
          return 'Você gosta do céu';
     }else if(cor === 'Verde'){
          return 'Você gosta de mato';
     }else{
          return 'Você não gosta de nada';
     }
}
console.log(corFavorita('Azul'))
console.log(corFavorita('Verde'))
console.log(corFavorita('azul'))

 
//  === Argumentos podem ser funções ===


// function mostrarConsole
// addEventListener('click',function(){
//      console.log('Clicou');
// });


// function mostrarConsole(){
     // console.log('Oi')
// }
// addEventListener('click',mostrarConsole);


/* === Pode ou não retornar um valor === */

/* Quando não definimos o return, ele irá retornar "undefined". O cód interno da função é executado normalmente, independente de existir valor de return ou não. */

function imc2(peso,altura){
     const imc2 = peso / (altura ** 2 );
     return imc2;
}
imc2(80,1.80); // undefined
console.log(imc2(80,1.8)); // retorna imc e undefined


// Valores retornados 

// uma função pode retornar qualquer tipo de dado e até outras funções

function terceiraIdade(idade){
     if(typeof idade !== 'number'){
          return 'informe sua idade!';
          // console.log('é idoso!');

     }else if(idade>=60){
          return true;
     }else{
          return false;
     }
     console.log('testando');
}

console.log(terceiraIdade('oi'));

// ===  Escopo  ===
// Varáveis  e funções definidas dentro de um bloco {}, não são visíveis fora dele

const totalPaises = 193;

function falaVisitar(paisesVisitados) {
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(falaVisitar(20)); // erro,totalPaises não definido
console.log(totalPaises); 


// === Escopo Léxico ===

// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = 'Designer';

function dados(){
     var nome = 'João Victor';
     var idade = 28;
     function outrosDados(){
      var endereco = 'Rio de Janeiro';
      var idade = 29;
      return `${nome},${idade},${endereco},${profissao}`;
     }
     return outrosDados();
}
console.log(dados());


// Hoisting 

// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

