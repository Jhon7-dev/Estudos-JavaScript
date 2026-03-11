
// ID
// getElementById seleciona e retorna elementos do DOM

const animais = document.getElementById('animais');
console.log(animais.innerText);

// Classe E Tag
// getElementByClassName e getElementByTagName
// selecionam e retornam uma lsita de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection.length);
const contato = document.getElementsByClassName('grid-section contato');

//Seletor Geral Único
//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);


const linksInternos = document.querySelector('[href^="#"');

// Seletor Geral Lista
//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma nodelist

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);
// const gridSection = document.querySelectorAll('.grid-section');
// console.log(gridSection);
const listas = document.querySelectorAll('ul');
console.log(listas);
const titulos = document.querySelectorAll('.titulo');
console.log(titulos);
//OBS:Diferente do getElementsByClassName, a lista aqui é estática

//HTMLCOLLECTION VS NODELIST
//A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelector é estática

// NodeList é uma coleção de (listas) de nós do DOM 

const titulo = document.querySelector('.titulo');
console.log(titulo);
const gridSectionHTML = document.getElementsByClassName('grid-section');
console.log(gridSectionHTML);
const gridSectionNode = document.querySelectorAll('.grid-section');
console.log(gridSectionNode);
//Acessando elementos da NodeList
// console.log(gridSection[0]);
titulo.classList.add('grid-section');
console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode);// 3 itens 

// ARRAY-LIKE
//HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});
