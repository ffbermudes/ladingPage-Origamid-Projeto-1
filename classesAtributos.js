// Adicione a classe ativo a todos os itens do menu
const menu = document.getElementsByClassName('menu')[0];
const liMenu = menu.querySelectorAll('li'); //Deu certo porque agora virou nodelist.
liMenu.forEach((li)=>li.classList.add('ativo'));
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const menuslc1 = document.querySelectorAll('.menu li');
liMenu.forEach((li)=>li.classList.remove('ativo'));
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((imagem, index)=>{
    console.log(imagem);
    if (!imagem.hasAttribute('alt')) {
    console.log(`A imagem de posição ${index} do array está sem atributo!`);
    }else if (imagem.hasAttribute('alt') ) console.log(`Existe o atributo alt na imagem ${imagem.getAttribute('src')}`);
});

// Modifique o href do link externo no menu
const menuAnchor = menu.querySelectorAll('a');
menuAnchor[menuAnchor.length-1].setAttribute('href','https://www.detraje.com.br');