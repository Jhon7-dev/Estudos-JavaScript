// uma empresa contrata um encanador a R$ 35,00 por dia. Crie um programa que solicite o númemro de dias trabalhados pelo encanador e mostre o valor líquido a ser pago, sabendo que são descontados 8% de imposto de renda


const valorPorDia = 35;
const diasTrabalhados = 90;

function calculoLiquido(valorPorDia,diasTrabalhados){
     const tributacao = (diasTrabalhados*valorPorDia)*0.8;
     return tributacao;

}
function calculoBruto(valorPorDia,diasTrabalhados){
     const bruto = valorPorDia*diasTrabalhados;
     return bruto;
}
console.log('O valor a ser pago com o líquido é ', calculoLiquido(valorPorDia,diasTrabalhados));
console.log('o valor de salário bruto é ', calculoBruto(valorPorDia,diasTrabalhados));