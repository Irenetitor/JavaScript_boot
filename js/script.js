// Busca el botón del HTML mediante su atributo id para poder conectarle un evento.
const imp_cons = document.getElementById("consola");

const cuerpo = document.getElementById("cuerpo"); // Busca el elemento con id "cuerpo" en el HTML.

const titulo = document.getElementById("titulo"); // Busca el elemento con id "titulo" en el HTML.

// Registra una función que se ejecuta cada vez que el usuario hace clic en el botón.
imp_cons.addEventListener("click", () => {
  const imagen = document.createElement("img"); // Crea un elemento de imagen.
  imagen.src = "https://www.w3schools.com/images/w3schools_green.jpg"; // Asigna la URL de la imagen.

  titulo.textContent = "Cambiamos texto"; // Cambia el texto del título a "Esto es un evento".
  document.body.appendChild(imagen); // Agrega la imagen al final del cuerpo del documento.
  // Escribe un mensaje en la consola de herramientas de desarrollo del navegador.
  console.log("Esto es un evento");
});
