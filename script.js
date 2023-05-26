
const DICCIONARIO = Object.freeze({ e: 'enter', i: 'imes', o: 'ober', a: 'ai', u: 'ufat' })

const buttonEncriptar = document.getElementById('button-encriptar')
const buttonDesencriptar = document.getElementById('button-desencriptar')

const CajaTexto = document.getElementById('result')

const cajaMuñeco = document.getElementById('imageDiplay')
const cajaTextoResultado = document.getElementById('resultContainer')

const buttonCopiar = document.getElementById("button-copiar");
const resultContainer = document.getElementById('result')

/* BLOQUEAR MAYUSCULAS Y CARACTERES ESPECIALES */

function validateAndProcess() {
  
  var userInput = document.getElementById("cajaTexto").value;

  if (!validateInput(userInput)) {
    alert("Solo minusculas, sin numeros ni caracteres especiales");
    return false
  }
    return true
}

function validateInput(input) {
  var lowercaseRegex = /^[a-z ]+$/; // Solo minusculas
  return lowercaseRegex.test(input);
}



/* OBTENER EL TEXTO DE TEXTAREA */
function recuperarTexto() {
  return document.getElementById('cajaTexto').value;
}

/* MOSTRAR RESULTADO */
const mostrarResultado = (text) => {
  actualizarTexto(text)
  cajaMuñeco.classList.toggle('invisible', text)
  cajaTextoResultado.classList.toggle('invisible', !text)
}

/* ACTUALIZAR EL TEXTO DEL RESULTADO */
const actualizarTexto = (texto) => {
  CajaTexto.value = texto
}

/* COPIAR TEXTO */
const copiarTexto = () => {
  const textoEncriptado = resultContainer.value
  navigator.clipboard.writeText(textoEncriptado);
}

/* ENCRIPTAR Y DESENCRIPTAR */
const cifrarDecifrar = (text, type) => {
  for (const key in DICCIONARIO) {
    type === 'encrypt' && (text = text.replaceAll(key, DICCIONARIO[key]))
    type === 'decrypt' && (text = text.replaceAll(DICCIONARIO[key], key))
  }
  return text
}

/* ESCUCHADORES DE EVENTOS*/
buttonCopiar.addEventListener("click", copiarTexto)

buttonEncriptar.addEventListener('click', () => {
  if (validateAndProcess()){
      const texto = cifrarDecifrar(recuperarTexto(), 'encrypt')
  mostrarResultado(texto)
  }

})

buttonDesencriptar.addEventListener('click', () => {
  if(validateAndProcess()){
      const textoDesencriptado = cifrarDecifrar(recuperarTexto(), 'decrypt')
  mostrarResultado(textoDesencriptado)
  }

})


