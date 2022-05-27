
window.onload=inicio;

function inicio(){
    document.querySelectorAll("button")[0].onclick=agregar;
    document.querySelectorAll("button")[1].onclick=quitar;
}

var encriptado;

function agregar(){
    var texto=document.querySelector("#aencriptar").value;
    encriptado = texto
    .replace(/i/gi,'imes')
    .replace(/a/gi,'ai')
	.replace(/e/gi,'enter')
    .replace(/o/gi,'ober')
	.replace(/u/gi,'ufat');
    document.querySelector(".mostrar_texto").value = encriptado;
}

function quitar(){
    var texto=document.querySelector(".mostrar_texto").value;
    encriptado=texto
    .replace(/ai/gi,'a')
	.replace(/enter/gi,'e')
    .replace(/imes/gi,'i')
    .replace(/ober/gi,'o')
	.replace(/ufat/gi,'u');
    document.querySelector(".mostrar_texto").value = encriptado;
}