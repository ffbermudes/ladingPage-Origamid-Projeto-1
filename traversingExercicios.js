// Duplique o menu e adicione ele em copy
	//Selecionando e criando copia do menu.
		const menu = document.querySelector(".menu");
		const copyMenu = menu.cloneNode(true);
	//selecionando footer com a classe copy
		const copy = window.document.getElementsByClassName("copy")[0];
	//inserindo copia do menu dentro desse footer
		copy.appendChild(menu);

		// Selecione o primeiro DT da dl de Faq
	//selectionando elemento DL com getElement FORMA-1
		const firstDT = document.getElementsByTagName("dl")[0];
		const firstDL = firstDT.children[0].innerText;
	//selectionando com querySelector.
		const firstDT2 = document.querySelector("dl>dt").innerText;

		// Selecione o DD referente ao primeiro DT
	//Selecionando dl
		const DL = document.querySelector("dl");
	//variável para dl.
		const firstDD = DL.querySelectorAll("dd")[0];

		// Substitua o conteúdo html de .faq pelo de .animais
	//selecionando elementos solicitados.
	const faq = document.querySelector(".faq");
	const animais = document.querySelector(".animais");
	//utilizando o pai para manipular elementos
		faq.innerHTML = animais.innerHTML;	
	// faq.parentElement.replaceChild(animais, faq);
		//Eu removo o Elemento substituído e coloco um novo.