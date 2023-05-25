const botao = document.querySelectorAll(".receita__botao");
const receita = document.querySelectorAll(".receita__titulo");
const modal = document.querySelector(".receitas__modal");
const botaoFechar = document.querySelector("dialog button");
const modalFechar = document.querySelector(".modal__fechar");
const modalTitulo = document.querySelector(".modal__titulo");
const modalContato = document.querySelector(".contato__modal");
console.log(modalContato);
const contatoButton = document.querySelector(".rodape__contato")
console.log(contatoButton);
var tituloReceita = [];


for (var i = 0; i < receita.length; i++) {
    tituloReceita[i] = receita[i].innerHTML;
}

for(var i = 0; i < botao.length; i++) {
    //console.log(i); 
    botao[i].addEventListener("click", function(){
        //modalTitulo.innerHTML = valor();       
        modal.showModal();

        //console.log(receita[i].innerText);
    });
}

botaoFechar.onclick = function() {
    modal.close()
}

modalFechar.onclick = function() {
    modalContato.close()
}

contatoButton.addEventListener("click", function(){
    modalContato.showModal();
});

const buttonMenu = document.querySelector(".menu__button");
console.log(buttonMenu);
const menuMobile = document.querySelector(".menu__mobile");
console.log(menuMobile);
const buttonIcon = document.querySelector(".ph-list");

buttonMenu.addEventListener("click", function() {
    menuMobile.classList.toggle('active')
    if (buttonIcon.classList.contains('ph-list')){
        buttonIcon.classList.remove('ph-list');
        buttonIcon.classList.add('ph-x');
    } else {
       buttonIcon.classList.remove('ph-x'); 
        buttonIcon.classList.add('ph-list');
    }

});


