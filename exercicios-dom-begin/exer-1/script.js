// // const botton = document.getElementById("jsstyle")
const button = document.querySelector('.jsstyle')
function js_style(){
    const paragrafo = document.querySelector('#text')
     paragrafo.style.color = 'red';
     paragrafo.style.fontSize = '70px';
     paragrafo.style.fontFamily = 'Arial';
}

button.addEventListener('click',js_style);
