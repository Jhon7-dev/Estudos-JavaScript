// receber uma temperatuea em Fahrenheit e convertê-la para Celsius através da seguinte fórmula: Celsius = ( F - 32 )/ 1.8 e exibir o valor em celsius

const tempFah = 50;
function calcularTemp(tempFah){
     
const calcularTempCelsius = (tempFah - 32)/ 1.8;
return calcularTempCelsius;

}
console.log('A temperatura em Fahrenheit é 50°F e a temperatura em Celsius é ',calcularTemp(tempFah), '°C');