// receber a base e altura do triangulo, calcular sua área e exibir o valor calculado

var altura = 10;
var  base = 5;

function calculoDaArea(altura,base){
     const s = (base*altura)/ 2;
     return s;
}
console.log('Base é ', base , 'E a Altura é ', altura,' resultado do cálculo da área é : ', calculoDaArea(altura,base));