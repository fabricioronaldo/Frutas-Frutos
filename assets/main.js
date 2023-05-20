const botao = document.querySelectorAll(".receita__botao");
const receita = document.querySelectorAll(".receita__titulo");
const modal = document.querySelector("dialog");
const botaoFechar = document.querySelector("dialog button");
const modalTitulo = document.querySelector(".modal__titulo");
console.log(botao);
console.log(receita);
console.log(modalTitulo);
var tituloReceita = [];


for (var i = 0; i < receita.length; i++) {
    tituloReceita[i] = receita[i].innerHTML;
}
console.log(typeof tituloReceita);
var o = JSON.stringify(tituloReceita);

console.log(tituloReceita);

function valor(indice){
    console.log(indice);
    modalTitulo.innerHTML = tituloReceita[indice];
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

//[0].childNodes[3].childNodes[1]

//[1].childNodes[3].childNodes[1].childNodes[0]