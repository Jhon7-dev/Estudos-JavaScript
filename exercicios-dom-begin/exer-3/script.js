const fomulario = document.querySelector('formulario')

function getForm(event){
     event.preventDefault()
     if(nome.value == " " && sobrenome.value == " "){
          var nome =  document.querySelector('nome')
          var sobrenome =  document.querySelector('sobrenome')
          alert("Nome não informado!")
     }
     function validaEmai(){
          var email = document.querySelector('email')
          if(email.length<8)||
          (email.indexOf)

     }
}
fomulario.addEventListener('submit',getForm);
