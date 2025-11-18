// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'


var minhaIdade = 22;
var idadePai = 53;
var idadeMae = 42;

if(idadePai>idadeMae){
     console.log("meu pai é mais velho que eu E minha mãe");
}else if(idadeMae>minhaIdade){
     console.log("minha mãe é mais velha que eu");
}else{
     console.log("sou o mais novo deles dois.");
}

// Qual valor é retornado na seguinte expressão?

var expressao = (5 - 2) && (5 - ' s ') && (5 - 2);
console.log(expressao);

// 3

// Compare o total de habitantes do Brasil com China (valor em milhões)

var brasil = 207;
var china = 1340;

if(china>brasil){
     console.log('China é mais populoso que o Brasil');
}else{
     console.log("Brasil é mais populoso que a China");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}