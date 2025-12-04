// declaração de função (Function hoisting)
falaOi();
function falaOi(){
     console.log('oi');
}
// First-class objects(Objetos de primeira classe)
//Function expression

const souUmDado = function(){
     console.log('Sou um dado');
};
souUmDado();

function executaFuncao(funcao){
     console.log('vou executar a função abaixo');
     funcao();
}
executaFuncao(souUmDado);

// Arrow function 

const functionArrow = () => {
     console.log('Sou uma arrow function');
};
functionArrow();

// Dentro de um objeto 

const obj = {
     falar : function(){
          console.log('estou falando.....');
     }
};
obj.falar();