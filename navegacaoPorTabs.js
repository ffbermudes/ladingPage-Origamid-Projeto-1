function initTabNav(){
	const tabMenu = document.querySelectorAll(".js-tabmenu li");
	const tabContent = document.querySelectorAll(".js-tabcontent section");

	if(tabMenu.length && tabContent.length){ //Qual a importância desse IF? Explicação abaixo.
		//coloca a classe ativo na primeira section de tabcontent.
		tabContent[0].classList.add('ativo');

		//Remove todos os ativos e mantém o ativo desejado.
		function activeTab(index){
			tabContent.forEach((index)=>{
				index.classList.remove("ativo");
			});
			tabContent[index].classList.add("ativo");
		}

		//Adiciona evento de click nas imagens
		tabMenu.forEach((li, index)=>{
			li.addEventListener("click", ()=>{
				activeTab(index);
			})
		});
	};
	//O IF é importante porque evita que todo o código seja quebrado caso as variáveis de seleção de elementos HTML não esteja funcionando.
}
initTabNav();

function initAccordion(){
	const accordionList = document.querySelectorAll(".js-accordion dt");
	const activeClass = 'ativo';
	if (accordionList.length){
		function activeAccordion(){
			this.classList.toggle(activeClass);
			this.nextElementSibling.classList.toggle(activeClass);
		}

		accordionList.forEach((item)=>{
			item.addEventListener('click', activeAccordion)
		});
	};
}
initAccordion();

//todos links internos
const linksInternos = document.querySelectorAll('.js-navMenu a[href^="#"]');

function scrollToSection(evento){
	//Não permite o vinculo do link padrão dentro da página.
		evento.preventDefault();
	const caminhoHref = this.getAttribute('href');
	const alturaSecao = document.querySelector(caminhoHref);
	console.log(alturaSecao.offsetTop);
	window.scrollTo(0, alturaSecao.offsetTop);
};

linksInternos.forEach((link)=>{
	link.addEventListener('click', scrollToSection)
});