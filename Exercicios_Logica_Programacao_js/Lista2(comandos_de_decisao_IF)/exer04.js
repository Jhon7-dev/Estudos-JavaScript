// Calcular a média de um aluno em um semestre com duas provas, onde M = (p1+p2)/2. Se a média for maior ou igual a 5 escreve "aprovado", senõ calcule e mostre quanto faltou para atingir 5

const p1 = 5;
const p2 = 2;
var media = (p1+p2)/2;

if(media >= 5){
     console.log("Aprovado!");
}else{
     var calculo = 5 - media;
     console.log("Reprovado! faltou apenas ", calculo );
}