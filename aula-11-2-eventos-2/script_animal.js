const img = document.querySelector('img');


function callback(){
  console.log('clicou na img')   
}

img.addEventListener('click',callback)

// img.addEventListener('click',function(){
//      console.log('clicou');
// });
// console.log(img);

// EVENT 
// primeiro parâmetro do callback é referente ao evento que ocorreu

function callback(event){
     console.log(event);
}
img.addEventListener('click',callback)

// PROPRIEDADES DO EVENT

const animaisLista = document.querySelector('.animais-lista');

function callbackList(event){
     console.log(event.currentTarget); // VAI ME RETORNAR 
     console.log(event.target); // ELE VAI ME RETORNAR A IMAGEM QUE FOI CLICADA
       console.log(event.type);
}

animaisLista.addEventListener('click',callbackList);

const linkExterno = document.querySelector('a[href^="http"]');
// vou adicionar um event na function
function handleLinkExterno(event){
     event.preventDefault();
     console.log(event)
     console.log(this.getAttribute('href')); // quando eu clicar em algum link, ele vai me retornar o link 'https://www.origamid.com/'
} 
linkExterno.addEventListener('click',handleLinkExterno);

// DIFERENTES EVENTOS 

const h1 = document.querySelector('h1');
function handleEvent(event){
     console.log(event.type,event); // primeiro ele vai passar o tipo de evento e o evento
}
// h1.addEventListener('click',handleEvent);
// h1.addEventListener('mouseenter',handleEvent);
// h1.addEventListener('mousemove',handleEvent);

// window.addEventListener('scroll',handleEvent)
// window.addEventListener('resize',handleEvent)
// window.addEventListener('keydown',handleEvent)

// KEYBOARD

//  VOCÊ PODE ADICIONAR ATALHOS PARA FACILITAR A NAVAEGAÇÃO NO SEU SITE,ATRAVÉS DE EVENTOS DO KEYBOARD

function handleKeyboard(event){
     if(event.key === 'f'){
          document.body.classList.add.toggle('azul')
     }
}
window.addEventListener('keydown',handleKeyboard);


//Exercício 1 — Botão que mostra mensagem 
// Crie um botão Quando clicar nele 
// mostre no console: Você clicou no botão
const botao = document.querySelector('.botao');

function clicarNoBotao(){
     console.log('você clicou no botão, parabéns!');
}
botao.addEventListener('click',clicarNoBotao);
// console.log('você clicou no botão, parabéns!');

// Exercício 2 — Clique na imagem
// Clique na imagem, Crie uma imagem , Quando clicar nela: mostre, Imagem clicada e dps mostre o src da imagem usando o this.getAttribute('src')

const imgPastor = document.querySelector('.pastor_alemao');

function exibirMensagem(){
     console.log('imagem clicada');
     console.log(this.getAttribute('src')); // vai mostrar o nome da img, no caso está salva como 'cachorro_dog'
}
imgPastor.addEventListener('click',exibirMensagem);

//  Exercício 3 — Descobrir o tipo do evento
// Crie um <h1>.
// Adicione:click, mouseenter
// Mostre:
// event.type
// Objetivo:
// entender que diferentes eventos existem.

const titulo_pastor = document.querySelector('.titulo-pastor');
function evento(e){
     console.log(e.type,e);
}
titulo_pastor.addEventListener('click',evento);
titulo_pastor.addEventListener('mouseenter',evento);
titulo_pastor.addEventListener('mousemove',evento);




function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
  else if(event.key === 'd'){
     document.body.classList.toggle('dark')
  }
}

window.addEventListener('keydown', handleKeyboard);

// FOR EACH E Eventos
// o método addEventListener é adicionado a um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles

const imgs = document.querySelector('img');
function handleImg(){
     console.log(event.target);
     console.log(event.target.getAttribute('src'));
     console.log(event.currentTarget.getAttribute('src'));

}
imgs.forEach((img) =>{
     // console.log(img);
     img.addEventListener('click',handleImg)
});


//// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelector('[href=#]');

function clickLink (e){
     e.preventDefault();
}



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
