let peso;
let altura;
let imc;

const form = document.querySelector('item-banner-2');
form.addEventListener('submit', function (e){
     e.preventDefault();
     console.log('Evento previnido.');
     setResultado('Olá mundo!');
})
function calculoImc (peso,altura){
     imc = peso / (altura*altura);
     if(imc < 16 ){
          return 'imc inválido!'
     }else if (imc >= 16 && imc < 18.5){
          return ('IMC : ' + imc + ' => abaixo!')
     }else if (imc >= 18.5 && imc < 24.9){
          return ('IMC : ' + imc + ' => peso normal! ')
     }else if(imc >= 25 && imc < 29.9){
          return ('IMC: ' + imc + ' => sobrepeso!')
     }else if (imc >= 30 && imc < 34.9){
          return ('IMC: ' + imc + ' => Obesidade grau 1')
     }else if (imc >= 35 && imc < 39.9){    
          return ('IMC: ' + imc + ' => Obesidade grau 2')
     }else{
          return ('IMC: ' + imc + ' => Obesidade grau 3')
     }
}
// const insertToIMC = (valor) => {
//      const peso = document.getElementById('peso');
//      peso.value += valor;
// }

calculoImc();

function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg; // vai sair no html o resultado
}