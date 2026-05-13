function meuEscopo(){
     const form = document.querySelector('.form'); // vou selecionar os elementos
     const resultado = document.querySelector('.resultado')
     const pessoas = [] // array vazio para ser preenchido
    

     function recebeEventoForm(evento){
          evento.preventDefault(); // Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.
         const nome = document.querySelector('#nome');
         const sobrenome = document.querySelector('#sobrenome');
         const peso = document.querySelector('#peso');
         const altura = document.querySelector('#altura');
    
        // pessoas.push guarda no array 
        pessoas.push({
          nome: nome.value,
          sobrenome: sobrenome.value,
          peso: peso.value,
          altura: altura.value
        });
          console.log(pessoas);
        resultado.innerHTML += `
     <p>
          ${nome.value} 
          ${sobrenome.value} 
          ${peso.value} 
          ${altura.value}
     </p>
     `;
     // esse innerHTML += MOSTRA NA TELA 
     }
     form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
