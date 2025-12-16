// uma empresa pada r$ 10,00 por hora normal trabalhada e R$ 15.00 por hora extra. Receber o total de horas normais e o total de horas extras trabalhadas por um empregado no mês
// calcular e exibir o salário dele

const horasTrabalhadas = 8;
const diasUteis = 23;
const horasExtras = 6;

function calculoSalario(horasTrabalhadas,horasExtras,diasUteis){
     const calculoSalarioBase = diasUteis * horasTrabalhadas * 10;
     const calculoDeHoraExtra = 6*15;
     const salarioTotal = calculoSalarioBase + calculoDeHoraExtra;
     return salarioTotal;
}
console.log('o salário total é ', calculoSalario(horasTrabalhadas,horasExtras,diasUteis));