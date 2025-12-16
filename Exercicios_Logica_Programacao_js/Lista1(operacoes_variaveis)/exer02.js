// recerber dois valores, calcular a médiaaritmética e exibir o resultado

var number1 = 2;
var number2 = 6;
function calculoMedia(number1,number2){
     const soma = number1 + number2;
     const calculo = (soma) / 2;
     return calculo;
}
console.log('os números são ', number1 ,' e ', number2);
console.log('A média é ' , calculoMedia(number1,number2));
