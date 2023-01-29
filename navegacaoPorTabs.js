const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

//Remove todos os ativos e mantém o ativo desejado.
	function activeTab(index){
		tabContent.forEach((index)=>{
			index.classList.remove("ativo");
		});
		tabContent[index].classList.add("ativo");
	}