 // tudo é objwto da pra acessar com o "."
//String,numeros,boolean,objetos e MediaSession, possuem propriedades e métodos. por isso são objetos
 var nome ='joao';
 nome.length;
 nome.charAt(1);
 nome.replace ('jo','pa');
 nome;

 // uma string herda propriedade e métodos do construtor String ()

 //números 
 var altura = 1.8;
 altura.toString(); // '1.8'
 altura.toFixed(); // '2'
console.log((altura.toString()));
console.log((altura.toFixed()));

// funções

function areaQuadrado(lado){
     return lado*lado;
}
areaQuadrado.toString();
//function areaQuadrado(lado){
// return lado * lado;
// }"
//areaQuadrado.length;//1

// elementos do DOM 
// para selecionar um objeto do js, eu tenho que falar com o documento 

var btn = document.querySelector('.btn');
btn.classList.add('ativo'); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click',function(){
     console.log('Clicou')
})
console.log(btn);