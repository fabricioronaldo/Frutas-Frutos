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


//[0].childNodes[3].childNodes[1]

//[1].childNodes[3].childNodes[1].childNodes[0]