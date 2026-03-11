

// DOM 
// é uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e contúdo destes documentos

console.log(window);
//window é o objeto global do browser
//possui diferentes métodos e propriedades
window.innerHeight; // retorna a altura do browser

window.alert('isso mesmo');
alert('isso é um alerta') // funciona 

const href = window.location.href;


const h1Selecionado = document.querySelector('h1'); // seleciona o primeiro h1
document.body; // retorna o body

function callback (){
     console.log('clicou em ', h1Selecionado.innerText);
}
h1Selecionado.addEventListener("CLICOU EM ", h1Selecionado.innerText);

// NODE
//toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

