// Mostre no console cada paragrafo do site:
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

// Mostre o texto dos parágrafos no console:
paragrafos.forEach( (item) => console.log(item.innerText) );

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

// 
imgs.forEach((item, index) => console.log(item, index));

let i = 0;
imgs.forEach( (item,index) => {
    console.log(item);
    console.log(index);
    console.log(i++);
});

imgs.forEach( () => i++);
console.log(i);