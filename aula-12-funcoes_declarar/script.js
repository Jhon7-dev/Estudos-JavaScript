// declaraç~so de função
// acontecei o hoisting
// o que é hoisting?
// quando eu posso ter um fanção em baixo e chama-lá em qualquer posição acima


// falarOi();
// function falarOi(){
//      console,log('oi')
// };

const souUmDado = function(){
     console.log('Sou um dado.');
};


function executaFuncao(funcao){
     console.log('vou executar a função abaixo')
     funcao();
}
executaFuncao(souUmDado);


// ARROW FUNCTION

const funcaoArrow = () =>{
     console.log('sou uma arrow function');
};

funcaoArrow();