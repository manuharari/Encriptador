var buttonEncriptar = document.querySelector(".buttonEncriptar");
var buttonDesencriptar = document.querySelector(".buttonDesencriptar");
var muneco = document.querySelector(".containerImage");
var container = document.querySelector(".containerParagraph");
var result = document.querySelector(".resultext");
const SINMENSAJE = document.getElementById('imageDisplay')
const CONMENSAJE = document.getElementById('result')
let encriptado = true
var text;

buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;
buttonCopy.onclick = copiar;

function encriptar(){
    ocultarAdelante();
    var textBox = recuperarTexto();
    result.textContent = encriptarTexto(textBox);
}

function desencriptar(){
    ocultarAdelante();
    var textBox = recuperarTexto();
    result.textContent = desencriptarTexto(textBox);
}

function recuperarTexto(){
    textos = document.getElementById('cajaTexto').value;
    return text.value;
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    container.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

for(var i = 0; i < texto.length; i++){
    if(texto[i] == "a"){
        textoFinal = textoFinal + "ai"
    }
    else if(texto[i] == "e"){
        textoFinal = textoFinal + "enter"
    }
    else if(texto[i] == "i"){
        textoFinal = textoFinal + "imes"
    }
    else if(texto[i] == "o"){
        textoFinal = textoFinal + "ober"
    }
    else if(texto[i] == "u"){
        textoFinal = textoFinal + "ufat"
    }
    else {
        textoFinal = textoFinal + texto[i]
    }
}

return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
            i= i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
            i = i+3
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
            i = i+3;
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    
    return textoFinal;
    
    }

const buttonCopiar = document.querySelector(".buttonCopiar");
buttonCopiar.addEventListener("click", copiar = () => {
    var cotenido = document.querySelector("resultext").textContent;
    navigator.clipboard.writeText(contenido);
})

const mostrarResultado = (text) => {
    result.textContent = text
    SINMENSAJE.classList.toggle('ocultar', encriptado)
    CONMENSAJE.classList.toggle('ocultar', !encriptado)
}