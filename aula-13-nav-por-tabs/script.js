const h1 = document.querySelector('h1');
h1.innerText = '<p>novo título</p>';
h1.innerHTML = '<p>novo título</p>';
const animaisLista = document.querySelector('.animais-lista');
console.log(animaisLista.innerHTML);
// console.log(h1.innerHTML);
// console.log(h1.outerHTML);
// 
const menu = document.querySelector('.menu');

// menu.outerHTML; // todo o html do elemento
// menu.innerHTML; // html interno
// menu.innerText; // texto, sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada
console.log(h1);
console.log(animaisLista);
console.log(menu);

// TRANSVERSING 
// COMO NAVEGAR PELO DOM, UTILIZANDO SUAS PROPRIEDADES E MÉTODOS
const lista = document.querySelector('.animais-lista');
console.log(lista.parentElement); // ele vai me retornar a seção
console.log(lista.previousElementSibling); // ele vai retornar o elemento acima
console.log(lista.nextElementSibling); // ele vai retornar o elemento abaixo

console.log(lista.children); // htmlcolletion com os filhos
console.log(lista.children[0]); // primeiro filho
console.log(lista.children[--lista.children.length]); // último filho

  
lista.querySelectorAll('li'); // todas as LI´s
lista.querySelectorAll('li:last-child'); // último filho



// MANIPULAÇÃO

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo_contato = document.querySelector('.titulo')
animais.appendChild(contato);
