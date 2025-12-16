// array é um grupo de valores para guardas valores diferentes

var videoGames = ['Switch','ps4','xbox'];
console.log(videoGames[2]);

//Métodos e Propriedades de um Array

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3 
console.log(videoGames.pop());
console.log(videoGames);
console.log(videoGames.push);
//existe diversos outros métodos, map, reduce , foreach


// for loop
console.log('==== for ====')
for(var numero = 0; numero<10;numero++){
     console.log(numero);
}
console.log('==== while ====')
// while loop

var i = 0.
while(i<10){
     console.log(i);
     i++;
}

// arrays e loops

var videoGames = ['Switch','ps4','xbox','3ds'];

for (var i = 0; i< videoGames.length;i++){
     console.log(videoGames[i], '-');
}

// BREAK
// o loop irá parar caso encontro e palavra break

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
