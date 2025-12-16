function criaPessoa(nome, sobrenome,idade){
     return {
          nome,
          sobrenome,
          idade
     };
}
const pessoa1 = criaPessoa ('Joao','VICTOR ', 22);
console.log(pessoa1);
console.log(pessoa1.nome);

const pessoa2 = {
     nome: 'Amir',
     sobrenome: 'muhad',
     idade : 22,

     // Posso colocar um método aqui dentro do objeto

     fala(){
          console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
     }
};
pessoa2.fala();
console.log(pessoa2.nome);