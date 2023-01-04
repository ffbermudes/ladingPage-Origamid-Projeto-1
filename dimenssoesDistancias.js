// Verifique a distância da primeira imagem
// em relação ao topo da página
const topDistFirstImg = document.getElementsByTagName('img')[0];
console.log(topDistFirstImg.offsetTop);
console.log('Distância da primeira imagem do top.');
// Retorne a soma da largura de todas as imagens

function somaImagens(){
    const allImgs = document.querySelectorAll('img');
    let soma = 0;
    allImgs.forEach((img)=>{
        soma += img.offsetWidth;
    });
    console.log(soma);
}
window.onload = function(){
    somaImagens();
}//VAI CARREGAR NO FINAL DO SCRIPT.

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

function checkAnchors(){
    const linksAncora = document.querySelectorAll('a');
    for(let i=0; i < linksAncora.length; i++){
        if(linksAncora[i].offsetWidth < 48 || linksAncora[i].offsetHeight < 48)console.log('Verificar altura ou largura do elemento âncora! => ' + linksAncora[i].textContent);
    }
}

checkAnchors();

// Se o browser for menor que 720px.
// adicione a classe menu-mobile ao menu.
const menu = document.querySelector('.menu');
tamP = window.matchMedia('(max-width: 720px)');
if (tamP.matches) menu.classList.add('menu-mobile');