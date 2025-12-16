// Calular e exibir a área de uma circunferência recebendo seu raio. A fórmula para o cálculo é C = 2*PI*r (utilizar pi = 3.14)
function pi(){
     return 3.14;
}
// var circulo = {
//      raio: 5,
//      area: function(raio){
//           const areaCirculo = 2*pi*raio;
//           return areaCirculo;
//      }
// }
var raio = 5.0;
function calcularAreaCirculo(raio){
     const s = 2*pi()*raio;
     return s;
}
console.log('O raio é ',raio, ' e a Área é ', calcularAreaCirculo(raio));