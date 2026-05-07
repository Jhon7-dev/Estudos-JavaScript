// /* The code you provided defines a JavaScript function named `inserToDisplay` that takes a parameter `data`. Inside the function, it calls the `alert` function to display the value of `data` in an alert dialog box. Additionally, there is a `console.log` statement outside the function that logs the message 'js carregado' to the console. */
// function inserToDisplay(data){
//      alert(data)
// }
// console.log('js carregado');

const insertToDisplay = (valor) => {
     const display = document.getElementById('display');
     display.value += valor;
}
function limparTop(){
     document.querySelector('#display').value = ''
}
function back(){
     const display = document.querySelector('#display')
     display.value = display.value.slice(0,-1)
}
function result(){
          const display = document.querySelector('#display')
          try{
               display.value = eval(display.value)
          }catch{
               display.value='ERROR!'
          }    
}