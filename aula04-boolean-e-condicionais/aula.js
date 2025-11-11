var possuiGraducao = true

if(possuiGraducao){
     console.log('possui Graduação !!!');
}else{
     console.log('Não possui Graduação !!!');
}

var possuiGraducao = true
var possuiDoutorado = false;

if(possuiDoutorado){
     console.log('possui graduação e doutorado')
}else if(possuiGraducao){
     console.log('possui graduação mas não possui doutorado');
}else{
     console.log('não possui graduação');
}

var nome = '10kg' / 10;

if(nome){
     console.log(nome);
}else{
     console.log(nome);
}
//NaN

     if(! possuiGraducao){
          console.log('Não possui graduação');
     }
// Falsy

/*Truthy e Falsy
Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.*/
/*
// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou `` */ 

if(''){
     console.log("Vai aparecer?");
}else{
     console.log("Não aparece, 0 é falsy")
}
// Operadores lógicos &&  
/*Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos*/

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // cão
(5-5) && (5+5);//0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true


var condicional = ( 5 - 5) && (5 + 5);
if(!condicional){
     console.log('verdadeiro', condicional);
}else{
     console.log('false');
}
// O "OU" vai retornar o primeiro verdadeiro
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

/* */