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

function initScrollSuave(){
	//todos links internos
	const linksInternos = document.querySelectorAll('.js-navMenu a[href^="#"]');

	// Função ativa através do evento de click.
	function scrollToSection(event){
		event.preventDefault();

		//this é o elemento html clicado.
			console.log(this);

		//Pegando atributo href do elemento clicado.
			const caminhoHref = this.getAttribute('href');
			console.log(caminhoHref);

		//Utilizando a string do href para selecionar elemento da página e pegando a propriedade desejada desse elemento capturado que é a altura do elemento até o topo.
			const alturaSecao = document.querySelector(caminhoHref);
			console.log(alturaSecao);

		window.scrollTo({
			top: alturaSecao.offsetTop,
			behavior: 'smooth',
		});
	};

	//inserindo evento de click em todos links da página e apontando para scrollToSection
	linksInternos.forEach((link)=>{
		link.addEventListener('click', scrollToSection);
	});
}

initScrollSuave();