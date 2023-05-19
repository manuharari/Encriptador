var buttonEncriptar = document.querySelector(".buttonEncriptar");
var buttonDesencriptar = document.querySelector(".buttonDesencriptar");
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
        if(texto[i] == "ai"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "enter"){
            textoFinal = textoFinal + "e"
            i= i+4;
        }
        else if(texto[i] == "imes"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "ober"){
            textoFinal = textoFinal + "o"
            i = i+3
        }
        else if(texto[i] == "ufat"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    
    return textoFinal;
    
    }

    const buttonCopiar = document.querySelector(".buttonCopiar");
    buttonCopiar.addEventListener("click", copiar = () =>{
        var contenido = document.querySelector(".textResult").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("Listo");
    })
    