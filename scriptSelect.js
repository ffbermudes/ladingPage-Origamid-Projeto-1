// Retorne no console todas as imagens do site.
const imgAnimais = document.getElementsByTagName('img');
console.log(imgAnimais);
// Retorne no console apenas as imagens que começaram com a palavra imagem.
const imagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagem);
// Selecione todos os links internos (onde o href começa com #).
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao.
const titH2 = document.querySelector('.animais-descricao h2');
// Selecione o último p do site.
const lastP = document.querySelectorAll('p');
console.log(lastP[--lastP.length]);