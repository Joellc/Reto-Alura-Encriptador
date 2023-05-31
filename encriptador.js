// Obtener referencias a los elementos del DOM
const textArea = document.getElementById("texto");
const textA = document.getElementById("textA");
const copia = document.querySelector(".btn-copiar");
//const parte1 = document.getElementById("parte1");
const parte2 = document.getElementById("parte2");

copia.style.display = "none";

// Llaves de encriptación
const matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

// Función para encriptar texto
function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

// Función para desencriptar texto
function desencriptar(stringDesencriptada) {
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

// Función para mostrar la parte 2 y encriptar el texto
function btnEncriptar() {
  const texto = textArea.value.trim();

  if (texto.length === 0) {
    swal.fire({
      icon: "info",
      iconColor: "#3f5b9a",
      background: "#a7b9c0",
      title: "¡Ups!",
      confirmButtonColor: "#3f5b9a",
      text: "El campo se encuentra vacío. Escriba el texto que desea encriptar.",
    });
  } else {
    const textoEncriptado = encriptar(texto);

    //parte1.style.display = "none";
    parte2.style.display = "block";
    textA.value = textoEncriptado;
    copia.style.display = "block";
  }
}

// Función para desencriptar texto
function btnDesencriptar() {
    const textoEncriptado = textA.value.trim();
  
    if (textoEncriptado.length === 0) {
      swal.fire({
        icon: "info",
        iconColor: "#3f5b9a",
        background: "#a7b9c0",
        title: "¡Ups!",
        confirmButtonColor: "#3f5b9a",
        text: "El campo se encuentra vacío. Ingrese el texto encriptado que desea desencriptar.",
      });
    } else {
      const textoDesencriptado = desencriptar(textoEncriptado);
      textA.value = textoDesencriptado;
    }
  }

// Función para copiar el texto encriptado
function copiar() {
  textA.select();
  document.execCommand("copy");
  swal.fire({
    icon: "info",
    iconColor: "#3f5b9a",
    background: "#a7b9c0",
    title: "Información",
    confirmButtonColor: "#3f5b9a",
    text: "Texto copiado al portapapeles.",
  });
}

// Asignar eventos a los botones
const encriptarBtn = document.getElementById("encriptarBtn");
const desencriptarBtn = document.getElementById("desencriptarBtn");
const btnCopiar = document.querySelector(".btn-copiar");

encriptarBtn.addEventListener("click", btnEncriptar);
desencriptarBtn.addEventListener("click", btnDesencriptar);
btnCopiar.addEventListener("click", copiar);


