// calcular e exibir a velocidade média do veículo em uma estrada recebendo a variação do espaço e tempo

const s0 = 10;
const s = 100;
const t0 = 10;
const t = 15;

function calculoVelMedia(s0,s,t0,t){
     const deltaS = s - s0;
     const deltaT = t - t0;
     const velMedia = (deltaS) / deltaT;
     return velMedia;
}
console.log('A velocidade média é ' + calculoVelMedia(s0,s,t0,t), 'm/s');