// const menu = document.querySelector('.menu');


// menu.className;//string
// menu.classList//lista de classes
// menu.classList.add('ativo');
// menu
// menu.classList.add('ativo'); // adiciona a classe 'ativo'
// menu.classList.remove('ativo'); // remove a classe 'ativo'
// menu.classList.toggle('navegacao-2'); // adiciona a classe se ela não existir, caso contrário, remove-a.
// menu.classList.contains('ativo'); // verifica se tem essa clase e retorna true ou false
// console.log(menu.classList.add);

// attributes 
// retorna uma array-like com os atributos do elemento

const animais = document.querySelector('.animais');

// animais.attributes; // retorna todos os atributos
// animais.attributes[0]; // retorna o primeiro atributo
console.log(animais); // vai me retorna a section com a classe animais
console.log(animais.attributes[0]);
console.log(animais.attributes[1]);

//getAttribute e seAttribute
// métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');


img.getAttribute('src'); // valor do src
img.setAttribute('alt','texto alternativo'); // muda o alt
img.hasAttribute('id');// true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttribute(); // true / false se tem algum atributo