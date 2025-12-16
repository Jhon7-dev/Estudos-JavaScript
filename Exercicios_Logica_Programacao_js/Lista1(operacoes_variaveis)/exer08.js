//calcular e exibir o consumo médio de combustivel de um veículo recebendo a distância percorrida e a quantidade de combustível gasto.
// consumo = distância percorrida (Km) / combustível gasto (L)
// C = km / L

const distanciaKm = 7.00;
const combustivelGastoLitros = 1.5;

function calculoDoConsumo(distanciaKm,combustivelGastoLitros){
     const calculo = distanciaKm / combustivelGastoLitros;
     return calculo;
}
console.log('O consumo médio do carro é ', calculoDoConsumo(distanciaKm,combustivelGastoLitros), 'KM/L');