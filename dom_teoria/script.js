//  <html> </html> document.documentElement
// <body> document.body

// A childNodes coleção lista todos os nós filhos, incluindo os nós de texto.
// ext, DIV, Text, UL, ..., SCRIPT

// Propriedades firstChild que lastChildproporcionam acesso rápido tanto ao primeiro quanto ao último filho.

// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild


for(let i = 0; i < document.body.childNodes.length;i++){
     // alert( document.body.childNodes[i] );
}
// Para cada um dos itens a seguir, indique pelo menos uma forma de acessá-los:

// O <div>nó DOM?
document.body.firstChild
document.body.childNodes[1]
// O <ul>nó DOM?
document.body.children[1]
document.body.lastElementChild
// O segundo <li>(com Pete)?
document.body.lastElementChild.lastElementChild


// NAVEGAÇÃO COM ELEMENTOS

elem.childNodes[0].background = 'red'


// document.getElementById

//  se um elemnto possui um "id" atributo, podemos obtê-lo usando o método 
// document.getElementById(id)

document.getElementById('elem');
elem.style.background = 'red'

// querySelectoAll()
//elem.querySelectorAll(css)[0], mas este último procura por todos os elementos e escolhe um
//  retorna todos os elementos internos 'elem' que correspondem ao seletor css fornecido

// querySelector(css) retorna o priomeiro elemento para o selector css fornecido
//procura apenas um. 


// getElementBy
// elem.getElementByTagName(tag) procura elementos com a tag fornecida e retorna a coleção deles.
// o tag parâmetro também pode ser um * para qualquer tag
// exemplo
//// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

//getElementsByClassName(className) 
// retorna elementos que possuem classe css fornecida
const gridSection = document.getElementsByClassName('grid-section');
// encontrando todas as tags inputs
let inputs = table.getElementsByTagName('input');