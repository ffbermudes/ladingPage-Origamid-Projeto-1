// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const allLinks = document.querySelectorAll('a');

function handleLink(event){
    event.preventDefault();

    allLinks.forEach((link)=>{
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
}


allLinks.forEach((link)=>{
    link.addEventListener('click', handleLink);
});//adicionar em todos ancoras o evento que ativa função handLink.

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('a');

function showElementConsole(e){
    console.log(e.currentTarget);
}
allElements.forEach((element)=>{
    element.addEventListener('click', showElementConsole);
    element.addEventListener('click', removeElementClick);
});


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElementClick(e){
    e.currentTarget.remove();
    }

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const keys = document.addEventListener('keydown', keyUsed);

function keyUsed(e){
    if (e.key === 't')
        document.documentElement.classList.toggle('upLetters');
}