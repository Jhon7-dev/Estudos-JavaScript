// quero selecionar cada 'li'
const tabMenu = document.querySelectorAll('.js-tabmenu li') // quero selecionar todos os itens, mas eu quero selecionar CADA 'li' e NÃO TODOS
const tabContent = document.querySelectorAll('.js-tabcontent section')


// vou criar uma função aqui que vai adicionar uma classe a cada click que eu der
function activeTab(index){
     tabContent.forEach((section)=>{ //  tira todas as classes 'ativo' 
          section.classList.remove('ativo');
     });
     tabContent[index].classList.add('ativo');
}

// quero adicionar um evento de click aqui, quero que passe um número no elemento que eu clico
// eu fiz um looping para cada 'li',ai eu tenho o itemMenu e o index que mostra a posição do elemento, em cada item eu adiciono o evento de click e executa essa function,primeira coisa identifica o activeTab
tabMenu.forEach((itemMenu,index)=>{
     itemMenu.addEventListener('click',function(){
          activeTab(index);
     })
});