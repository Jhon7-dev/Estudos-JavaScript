const formulario = document.querySelector("form");

// function getFormValue(){
//   if(!document.querySelector("input[type='text']").value){
//     alert("Campo com nome vazio!")
//   }
//   alert("Formulário enviado!")
// }
// formulario.addEventListener('submit',getFormValue)

function getFormValue() {
  var fname = form1.fname;
  var lname = form1.lname;
  if (fname.value == "" && lname.value == "") {
    alert("Nome não informado! Campo vazio!");
    fname.focus();
    lname.focus();
    return false;
  } else {
    alert("Formulário enviado!");
    return true;
  }
}
formulario.addEventListener("submit", getFormValue);
