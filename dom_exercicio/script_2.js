// Retorne todas as imagens dos produtos
const img = document.querySelectorAll('img')
console.log(img)
// Retorne apenas imagens que começam com "imagem"
const imagens = document.querySelectorAll('img[src^="imagem"]');
console.log(imagens);
// Selecione todos os links internos
const links = document.querySelectorAll('a[href^="#"]')
console.log(links)
// Selecione o primeiro h3 de produto
const primeiroH3 = document.querySelector('h3')
console.log(primeiroH3)
// Selecione o último p da section getElementsByTagName
const ultimoP = document.getElementsByTagName('section p:last-child')
console.log(ultimoP[4])
// Usando querySelector, selecione o título
const first_titulo = document.querySelector('.titulo')
console.log(first_titulo)
// Usando querySelectorAll, selecione todos os produtos
const produtos = document.querySelectorAll('.produto')
console.log(produtos)
// Usando getElementsByTagName, selecione todas as divs
const produtos_div = document.getElementsByTagName('div')
console.log(produtos_div)
// Faça um forEach nas imagens e adicione uma borda (style)
const img_borda = document.querySelectorAll('img');
img.forEach(function(imgItem,index,array){
     imgItem.style.border = '2px solid blue';
    
})