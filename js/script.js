// Busca el botón del HTML mediante su atributo id para poder conectarle un evento.
const imp_cons = document.getElementById("consola");

const cuerpo = document.getElementById("cuerpo"); // Busca el elemento con id "cuerpo" en el HTML.

const titulo = document.getElementById("titulo"); // Busca el elemento con id "titulo" en el HTML.

//ejercicio 1
const semaforo = document.getElementById("semaforo"); // Busca el botón que cambiará el fondo.
const botonRojo = document.getElementById("boton-rojo"); // Busca el botón que cambiará su propio color.

//ejercicio 2
const tamanoFuente = document.getElementById("tamano_fuente"); // Busca el botón que cambiará el tamaño de fuente.
const texto_Ejercicio2 = document.getElementById("titulo"); // Busca el elemento con id "titulo" en el HTML para cambiar su tamaño de fuente.

//ejercicio 3
const moverTexto = document.getElementById("mover_texto"); // Busca el botón del ejercicio 3.

//ejercicio 4
const botonEsquinas = document.getElementById("boton-esquinas"); // Busca el botón que cambia las esquinas.
const cuadrado = document.getElementById("cuadrado"); // Busca el cuadrado, que permanece visible.

//ejercicio 5
const botonFondo = document.getElementById("boton-fondo"); // Busca el botón que cambia el color del texto.
const textoFondo = document.getElementById("texto-fondo"); // Busca el texto que cambiará de color.

// Ejercicio 6: oculta el botón.
const ocultarBoton = document.getElementById("ocultar-boton");

// Ejercicio 7: cambia la imagen.
const cambioFoto = document.getElementById("cambio-foto");
const imagen = document.getElementById("imagen");

// Ejercicio 8: destino url enganoso.
const botonUrl = document.getElementById("boton-url");

//Ejercicio 9: input change.
const nombre = document.getElementById("nombre");
const botonRobot = document.getElementById("boton-robot");

// Ejercicio 10: deshabilitar botón.
const botonDisabled = document.getElementById("boton-disabled");

// Ejercicio 11: parrafo clonado.
const botonClonar = document.getElementById("boton-clonar");
const parrafo = document.getElementById("parrafo-original");

// Ejercicio 12: crear un botón desde JavaScript.
const crearBoton = document.getElementById("boton-nuevo");

// Ejercicio 13: h2 dentro de un div
const caja = document.getElementById("caja");
const botonSorpresa = document.getElementById("boton-sorpresa");

// Ejercicio 14: imagen invocada.
const imagenInvocada = document.getElementById("imagen-invocada");

// Ejercicio 15: innerHTML permite inyectar etiquetas HTML.
const parrafoVacio = document.getElementById("parrafo-vacio");
const botonHola = document.getElementById("boton-hola");

// Ejercicio 16: el evento mouseover se dispara al pasar el ratón por encima.
const botonAmarillo = document.getElementById("boton-amarillo");

// Ejercicio 18: el evento dblclick se dispara con un doble clic.
const tituloDuro = document.getElementById("titulo-duro");

// Ejercicio 19: el evento keyup se dispara al soltar una tecla.
const cajaTeclas = document.getElementById("caja-teclas");

// Ejercicio 20: classList.add añade una clase ya definida en el CSS.
const parrafoMagico = document.getElementById("parrafo-magico");
const botonMagico = document.getElementById("boton-magico");

// Ejercicio 21: classList.toggle pone la clase si no está y la quita si está.
const contenedorNoche = document.getElementById("contenedor-noche");
const botonNoche = document.getElementById("boton-noche");

// Ejercicio 22: style.opacity cambia la opacidad directamente; la transición del CSS hace que tarde 2 segundos.
const cajaSecreta = document.getElementById("caja-secreta");
const botonSecreto = document.getElementById("boton-secreto");
const botonEsconder = document.getElementById("boton-esconder");

// Ejercicio 23: className reemplaza todas las clases del elemento de golpe.
const personaje = document.getElementById("personaje");

// Registra una función que se ejecuta cada vez que el usuario hace clic en el botón.
imp_cons.addEventListener("click", () => {
  const imagen = document.createElement("img"); // Crea un elemento de imagen.
  imagen.src = "https://www.w3schools.com/images/w3schools_green.jpg"; // Asigna la URL de la imagen.

  titulo.textContent = "Cambiamos texto"; // Cambia el texto del título a "Esto es un evento".
  cuerpo.appendChild(imagen); // Agrega la imagen al final del cuerpo del documento.
  // Escribe un mensaje en la consola de herramientas de desarrollo del navegador.
  console.log("Esto es un evento");
});
//Ejercicio 1
semaforo.addEventListener("click", () => {
  cuerpo.classList.toggle("fondo-rojo"); // Alterna la clase en body, por eso cambia el fondo de la página.
});

botonRojo.addEventListener("click", () => {
  botonRojo.classList.toggle("boton-rojo"); // Alterna la clase solo en este botón.
});

//Ejercicio 2
tamanoFuente.addEventListener("click", () => {
  texto_Ejercicio2.classList.toggle("tamano-fuente"); // Alterna la clase solo en el título.
});

//Ejercicio 3
moverTexto.addEventListener("click", () => {
  titulo.classList.toggle("mover-texto"); // Alterna la clase que desplaza el título.
});

// Ejercicio 4: alterna entre esquinas normales y redondeadas.
botonEsquinas.addEventListener("click", () => {
  cuadrado.classList.toggle("puntas_redondas");
  botonEsquinas.textContent = cuadrado.classList.contains("puntas_redondas")
    ? "Volver a esquinas normales"
    : "Redondear esquinas";
});

// Ejercicio 5: cambia el texto al color del fondo y viceversa.
botonFondo.addEventListener("click", () => {
  const estaCamuflado = textoFondo.classList.toggle("texto-fondo");

  if (estaCamuflado) {
    textoFondo.style.color = getComputedStyle(cuerpo).backgroundColor;
  } else {
    textoFondo.style.color = ""; // Quita el color en línea y recupera el color negro del CSS.
  }
});

// Ejercicio 6: oculta el botón.
ocultarBoton.addEventListener("click", () => {
  ocultarBoton.classList.toggle("ocultar-boton");
});

// Ejercicio 7: cambia la imagen.
cambioFoto.addEventListener("click", () => {
  imagen.classList.toggle("cambio-foto");
});

// Ejercicio 8: cambia la URL del botón.
botonUrl.addEventListener("click", () => {
  window.location.href = "https://www.wikipedia.org/"; // Lleva al usuario a Wikipedia aunque el botón diga Disney.
});

// Ejercicio 9: cambia el texto del botón según el input.
botonRobot.addEventListener("click", () => {
  nombre.value = "¡Hola, soy un robot!";
});

// Ejercicio 10: deshabilita el botón.
botonDisabled.addEventListener("click", () => {
  botonDisabled.disabled = true;
});

// Ejercicio 11: clona el párrafo.
botonClonar.addEventListener("click", () => {
  const parrafoClonado = parrafo.cloneNode(true); // Clona el párrafo con su contenido.
  parrafoClonado.removeAttribute("id"); // Evita ids repetidos en la página.
  parrafoClonado.textContent = "Soy el párrafo clonado"; // Texto que aparece en el clon.
  parrafo.parentNode.insertBefore(parrafoClonado, parrafo.nextSibling); // Inserta el párrafo clonado después del original.
});

// Ejercicio 12: crea un botón desde JavaScript.
crearBoton.addEventListener("click", () => {
  const botonNuevo = document.createElement("button"); // 1. Crea el botón vacío.
  botonNuevo.textContent = "Soy nuevo"; // 2. Le pone el texto.
  cuerpo.appendChild(botonNuevo); // 3. Lo pega al final del body.
});

// Ejercicio 13: h2 dentro de un div.
// Propósito: practicar appendChild sobre un elemento concreto (el div "caja")
// en lugar de pegar al final del body. La caja empieza vacía y la sorpresa aparece al pulsar.
botonSorpresa.addEventListener("click", () => {
  const h2 = document.createElement("h2"); // Crea un elemento h2.
  h2.textContent = "¡Sorpresa!"; // Le pone el texto.
  caja.appendChild(h2); // Lo pega dentro del div.
});

// Ejercicio 14: imagen invocada.
imagenInvocada.addEventListener("click", () => {
  const imagen = document.createElement("img"); // Crea un elemento de imagen.
  imagen.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQli-SZ-cKlNjl8QgELbtBiNVO2--ow9cX4V7S0WnX3pw&s=1024";
  imagen.alt = "Imagen e-14";
  caja.appendChild(imagen);
});

// Ejercicio 15: innerHTML permite inyectar etiquetas HTML.
botonHola.addEventListener("click", () => {
  parrafoVacio.innerHTML = "<strong>Hola</strong>";
});

// Ejercicio 16: el evento mouseover se dispara al pasar el ratón por encima.
botonAmarillo.addEventListener("mouseover", () => {
  botonAmarillo.style.backgroundColor = "yellow";
});

// Ejercicio 17: el evento mouseout se dispara al quitar el ratón de encima.
botonAmarillo.addEventListener("mouseout", () => {
  botonAmarillo.style.backgroundColor = ""; // Vacío = quita el color y vuelve al original.
});

// Ejercicio 18: el evento dblclick se dispara con un doble clic.
tituloDuro.addEventListener("dblclick", () => {
  tituloDuro.textContent = "¡Me rompiste!";
});

// Ejercicio 19: el evento keyup se dispara al soltar una tecla.
cajaTeclas.addEventListener("keyup", () => {
  const color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  cuerpo.style.backgroundColor = color;
});

// Ejercicio 20: classList.add añade una clase ya definida en el CSS.
botonMagico.addEventListener("click", () => {
  parrafoMagico.classList.add("clase-magica");
});

// Ejercicio 21: classList.toggle pone la clase si no está y la quita si está.
botonNoche.addEventListener("click", () => {
  contenedorNoche.classList.toggle("noche");
  // Con la clase .noche la luz está apagada, así que el botón ofrece encenderla; si no, apagarla.
  botonNoche.textContent = contenedorNoche.classList.contains("noche")
    ? "Encender"
    : "Apagar";
});

// Ejercicio 22: style.opacity cambia la opacidad directamente; la transición del CSS hace que tarde 2 segundos.
botonSecreto.addEventListener("click", () => {
  cajaSecreta.style.opacity = 1;
});

// Vuelve a dejar la caja invisible (también en 2 segundos) para regresar al estado inicial.
botonEsconder.addEventListener("click", () => {
  cajaSecreta.style.opacity = 0;
});

// Ejercicio 23: className reemplaza todas las clases del elemento de golpe.

document.getElementById("boton-fuego").addEventListener("click", () => {
  personaje.className = "fuego";
});
document.getElementById("boton-agua").addEventListener("click", () => {
  personaje.className = "agua";
});
document.getElementById("boton-tierra").addEventListener("click", () => {
  personaje.className = "tierra";
});

// Ejercicio 24: el evento input se dispara cada vez que cambia el valor del input.
const selectorColor = document.getElementById("selector-color");
const lienzo = document.getElementById("lienzo");

selectorColor.addEventListener("input", () => {
  lienzo.style.backgroundColor = selectorColor.value;
});

// Ejercicio 25: al pasar el ratón por encima, el botón salta a otra posición dentro de la celda.
const arena = document.getElementById("arena");
const botonEscurridizo = document.getElementById("boton-escurridizo");

botonEscurridizo.addEventListener("mouseover", () => {
  // El máximo se calcula con el tamaño de la celda, para que el botón no se salga de ella.
  const maxLeft = arena.clientWidth - botonEscurridizo.offsetWidth;
  const maxTop = arena.clientHeight - botonEscurridizo.offsetHeight;
  botonEscurridizo.style.left = Math.random() * maxLeft + "px";
  botonEscurridizo.style.top = Math.random() * maxTop + "px";
});
