const text_button = document.querySelector('botao')
function darkMod(event){
     if(event.key === 'd' )
          document.body.classList.toggle('dark');
          // text_button.innerHTML('trocar para ligth')

}
// text_button.addEventListener('click',darkMod);
text_button.addEventListener('keydown',darkMod);
// text_button.innerHTML()