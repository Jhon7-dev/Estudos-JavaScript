

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