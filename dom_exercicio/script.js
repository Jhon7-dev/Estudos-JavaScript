// Retorne no console todas as imagens dos posts
const img = document.querySelectorAll('img')
console.log(img)
// Retorne no console apenas as imagens que começam com "imagem"
// const imagem = document.querySelectorAll('[img/')
// Selecione todos os links internos (href começa com #)

// Selecione o primeiro h3 do blog
const primeiroH3 = document.querySelector('h3')
console.log(primeiroH3)
// Selecione o último parágrafo dentro do blog
const nav = document.querySelectorAll('a')
console.log(nav)
// Usando getElementById, selecione a section blog
const sectionBlog = document.querySelector('.grid-section')
const sectionBlodId = document.getElementById('blog')
console.log(sectionBlodId)
console.log(sectionBlog)

// Usando getElementsByClassName, selecione todos os posts
const post_all = getElementByClassName('post')
console.log(post_all[0])
// Usando getElementsByTagName, selecione todos os article