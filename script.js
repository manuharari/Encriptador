var buttonEncriptar = document.querySelector(".button-encriptar");
var buttonDesencriptar = document.querySelector(".button-desencriptar");
var muneco = document.querySelector(".containerImage");
var container = document.querySelector(".containerParagraph");
var result = document.querySelector(".resultext");

buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var textBox = recuperarTexto;
    result.textContent = encriptarTexto(textBox)
}

function desencriptar(){
    ocultarAdelante();
    var textBox = recuperarTexto;
    result.textContent = desencriptarTexto(textBox)
}