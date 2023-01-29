const lista = document.querySelector('.animais-lista');
console.log(lista.parentElement); //retorna o elemento pai do mesmo.
console.log(lista.nextElementSibling); //retorna o próximo elemento no mesmo nível de parentesco ou não.
console.log(lista.previousElementSibling);;//Retorna o elemento anterior no mesmo grau de parentesco ou não.

//	Mostra todos elementos dentro da variável html inclusive comentários.
console.log(lista.childNodes.length);

console.log(lista.children); // HTMLColection com todos os seus filhos.

// Você pode acessar seus elementos internos pois são Arrays.
// Utilize o length para acessar o último elemento.

//Exemplo:
console.log(lista.children[--lista.children.length]); //Essa forma se faz necessário porque é um HTMLcolection.

//opção mais utilizada no momento.

const listaNode = lista.querySelectorAll('li'); //Através de seu elemento html consigo selecionar os seus objetos li, utilizando querySelector.
console.log(listaNode);

//Da mesma forma com muita simplicidade eu consigo selectionar o ultimo elemento interno da lista UL;
const ListaNodeLastElement = lista.querySelector('li:last-child');
console.log(ListaNodeLastElement.outerHTML);


//Query Selector é vantajoso demais pois você pode utilizar elementos seletores css.

console.log(lista.childNodes); //Como o papel do children no objeto teremos todos os elementos dentro deste elemento. Porém teremos comentários, tecla de pular linha e etc.