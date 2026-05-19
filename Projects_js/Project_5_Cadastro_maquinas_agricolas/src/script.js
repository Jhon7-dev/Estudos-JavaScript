function meuEscopoForm(){
     const form = document.querySelector('.form');
     // significa procure o formulário e guarde ele na variável form
     const resultado = document.querySelector('.resultado')
     const maquinas_agricolas = [] // array vazio para ser preenchido
     
     
     function recebeEventoForm(e){ // significa => quando o formulário for enviado, receba as informações do evento
          e.preventDefault(); // o que faz? normalmente quando o form é enviado, recarrega a página, ou seja, apagaria tudo. o preventDefault significa "pare o comportamento padrão do formulário"


          const nome = document.querySelector('.nome'); // procura um elemento HTML com classe .nome
          // guarde esse elemento na variável nome
          const fabricante = document.querySelector('.fabricante');
          const potencia = document.querySelector('.potencia');


          // maquinas_agricolas.push(), vou adicionar  ao final do array

          maquinas_agricolas.push({

               // os elementos abaixo compõem um objeto,variáveis e funções
               nome: nome.value,  // o value é o texto digitado dentro do input

               fabricante: fabricante.value,// o value vai significar "pegue o valor digitado no input fabricante"

               potencia: potencia.value // acessar seus valores como input.value

          });
          console.log(maquinas_agricolas);
          resultado.innerHTML+=`
          <p>
          Cadastro concluido com sucesso!
          
          ${nome.value}
          ${fabricante.value}
          ${potencia.value}
          </p>`;
     //      const resultado = document.querySelector('.resultado');
     // resultado.innerHTML = '<p>CADASTRO CONCLUÍDO COM SUCESSO!</p>'
     console.log(resultado.innerHTML);
     
}
     form.addEventListener('submit',recebeEventoForm);
}
meuEscopoForm();