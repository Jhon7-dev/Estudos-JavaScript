function funcao(){
     console.log('oie');
}
funcao('valor');


// argumentos que sustenta todos os argumentos enviados

function soma (a,b,c,d,e,f ){
     let total = 0;
     for (let argumento of arguments){
          total+=argumento;
     }
     console.log(a,b,c,d,e, total);
}
soma(1,2,3,4,6,7);

function conta(operador,acumulador,numeros){
     for (let numero of numeros){
          acumulador+=numero;
          console.log(numero);
     }
     console.log(operador,acumulador,numeros);
     
}
conta('+',0,[20,30,40,50]);