//forEach
// o primeiro parametro é o callback(função), ou seja, a funcção que será ativada a cada item. Essa função pode receber 3 parâmetros:
// valorAtual, index e array

// const img = document.querySelectorAll('img');
// let i = 0;
// img.forEach(function(item, index,array){ // a função sempre recebe parâmetros, item, index é a posição
// // console.log(item,index,array)

// });

// forEach é um método de array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);


//   titulosArray.forEach(function(item){
//     console.log(item)
//   });


  //Arrow Function 
  //Sintaxe curta em relação a function expression.
  //Bara remover a palavra chave function e adicionar a fat arrow => após argumentos
  
  const img = document.querySelectorAll('img');

  img.forEach((item, index)=>{
    console.log(item,index)
  });