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
    result.textContent = encriptarTexto(textBox);
}

function desencriptar(){
    ocultarAdelante();
    var textBox = recuperarTexto;
    result.textContent = desencriptarTexto(textBox);
}

function recuperarTexto(){
    var textBox = document.querySelector(".textBox");
    return textBox.value;
}

function ocultarTexto(){
    muneco.classList.add("ocultar");
    container.classList.add("ocultar");
}