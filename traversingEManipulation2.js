// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const rodape = document.querySelector('.copy');

const newMenu = menu.cloneNode(true); //clonando.

rodape.appendChild(newMenu, rodape); //inserindo no rodapé.

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector('.faq-lista');
const firstDtFaq = faqLista.children[0];
// Selecione o DD referente ao primeiro DT
const ddFirstDtFaq = firstDtFaq.nextElementSibling;
// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');
document.body.replaceChild(animais, faq);