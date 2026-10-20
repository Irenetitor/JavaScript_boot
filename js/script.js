// ============================================================
// PARTE 1: BUSCAR ELEMENTOS DEL HTML
// document.getElementById("id") devuelve el elemento que tiene ese id,
// para poder cambiarlo o conectarle eventos más abajo.
// ============================================================

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
const ocultarBoton = document.getElementById("ocultar-boton"); // Busca el botón que se ocultará a sí mismo.

// Ejercicio 7: cambia la imagen.
const cambioFoto = document.getElementById("cambio-foto"); // Busca el botón que cambia la foto.
const imagen = document.getElementById("imagen"); // Busca la imagen que se va a cambiar.

// Ejercicio 8: destino url enganoso.
const botonUrl = document.getElementById("boton-url"); // Busca el botón que dice "Disney" pero lleva a otra página.

//Ejercicio 9: input change.
const nombre = document.getElementById("nombre"); // Busca la caja de texto que se rellenará sola.
const botonRobot = document.getElementById("boton-robot"); // Busca el botón que la rellena.

// Ejercicio 10: deshabilitar botón.
const botonDisabled = document.getElementById("boton-disabled"); // Busca el botón que se apagará tras el primer clic.

// Ejercicio 11: parrafo clonado.
const botonClonar = document.getElementById("boton-clonar"); // Busca el botón que clona el párrafo.
const parrafo = document.getElementById("parrafo-original"); // Busca el párrafo que se va a clonar.

// Ejercicio 12: crear un botón desde JavaScript.
const crearBoton = document.getElementById("boton-nuevo"); // Busca el botón que crea otro botón.

// Ejercicio 13: h2 dentro de un div
const caja = document.getElementById("caja"); // Busca el div donde se meterán el h2 (ej. 13) y la imagen (ej. 14).
const botonSorpresa = document.getElementById("boton-sorpresa"); // Busca el botón que crea el h2.

// Ejercicio 14: imagen invocada.
const imagenInvocada = document.getElementById("imagen-invocada"); // Busca el botón que crea la imagen.

// Ejercicio 15: innerHTML permite inyectar etiquetas HTML.
const parrafoVacio = document.getElementById("parrafo-vacio"); // Busca el párrafo vacío donde se inyectará el texto.
const botonHola = document.getElementById("boton-hola"); // Busca el botón que inyecta el texto.

// Ejercicio 16: el evento mouseover se dispara al pasar el ratón por encima.
const botonAmarillo = document.getElementById("boton-amarillo"); // Busca el botón que se pone amarillo (ej. 16 y 17).

// Ejercicio 18: el evento dblclick se dispara con un doble clic.
const tituloDuro = document.getElementById("titulo-duro"); // Busca el título que se "rompe" con doble clic.

// Ejercicio 19: el evento keyup se dispara al soltar una tecla.
const cajaTeclas = document.getElementById("caja-teclas"); // Busca la caja de texto donde se escribe.

// Ejercicio 20: classList.add añade una clase ya definida en el CSS.
const parrafoMagico = document.getElementById("parrafo-magico"); // Busca el párrafo que recibirá la clase.
const botonMagico = document.getElementById("boton-magico"); // Busca el botón que la añade.

// Ejercicio 21: classList.toggle pone la clase si no está y la quita si está.
const contenedorNoche = document.getElementById("contenedor-noche"); // Busca la caja que se pone en modo noche.
const botonNoche = document.getElementById("boton-noche"); // Busca el botón que alterna el modo noche.

// Ejercicio 22: style.opacity cambia la opacidad directamente; la transición del CSS hace que tarde 2 segundos.
const cajaSecreta = document.getElementById("caja-secreta"); // Busca la caja con el mensaje secreto.
const botonSecreto = document.getElementById("boton-secreto"); // Busca el botón que la revela.
const botonEsconder = document.getElementById("boton-esconder"); // Busca el botón que la esconde otra vez.

// Ejercicio 23: className reemplaza todas las clases del elemento de golpe.
const personaje = document.getElementById("personaje"); // Busca el cuadrado que cambia de disfraz.

// ============================================================
// PARTE 2: EVENTOS
// elemento.addEventListener("evento", función) ejecuta la función
// cada vez que ocurre el evento (click, mouseover, keyup...).
// ============================================================

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
  cuadrado.classList.toggle("puntas_redondas"); // Pone o quita la clase que redondea las esquinas.
  // contains() dice si el cuadrado tiene la clase; según eso se escribe el texto del botón.
  botonEsquinas.textContent = cuadrado.classList.contains("puntas_redondas")
    ? "Volver a esquinas normales"
    : "Redondear esquinas";
});

// Ejercicio 5: cambia el texto al color del fondo y viceversa.
botonFondo.addEventListener("click", () => {
  // toggle() devuelve true si la clase se acaba de poner y false si se acaba de quitar.
  const estaCamuflado = textoFondo.classList.toggle("texto-fondo");

  if (estaCamuflado) {
    // getComputedStyle lee el color de fondo que el navegador está aplicando al body y se lo pone al texto.
    textoFondo.style.color = getComputedStyle(cuerpo).backgroundColor;
  } else {
    textoFondo.style.color = ""; // Quita el color en línea y recupera el color negro del CSS.
  }
});

// Ejercicio 6: oculta el botón.
ocultarBoton.addEventListener("click", () => {
  ocultarBoton.classList.toggle("ocultar-boton"); // La clase del CSS lo oculta con display: none.
});

// Ejercicio 7: cambia la imagen.
cambioFoto.addEventListener("click", () => {
  imagen.classList.toggle("cambio-foto"); // La clase del CSS sustituye la imagen con content: url(...).
});

// Ejercicio 8: cambia la URL del botón.
botonUrl.addEventListener("click", () => {
  window.location.href = "https://www.wikipedia.org/"; // Lleva al usuario a Wikipedia aunque el botón diga Disney.
});

// Ejercicio 9: rellena la caja de texto con un mensaje.
botonRobot.addEventListener("click", () => {
  nombre.value = "¡Hola, soy un robot!"; // value es el texto que hay escrito dentro del input.
});

// Ejercicio 10: deshabilita el botón.
botonDisabled.addEventListener("click", () => {
  botonDisabled.disabled = true; // true lo apaga: ya no se puede pulsar y se ve gris (false lo reactivaría).
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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQli-SZ-cKlNjl8QgELbtBiNVO2--ow9cX4V7S0WnX3pw&s=1024"; // Ruta (enlace) de la imagen.
  imagen.alt = "Imagen e-14"; // Texto alternativo por si la imagen no carga.
  caja.appendChild(imagen); // La pega dentro del div "caja".
});

// Ejercicio 15: innerHTML permite inyectar etiquetas HTML.
botonHola.addEventListener("click", () => {
  parrafoVacio.innerHTML = "<strong>Hola</strong>"; // <strong> pone el texto en negrita.
});

// Ejercicio 16: el evento mouseover se dispara al pasar el ratón por encima.
botonAmarillo.addEventListener("mouseover", () => {
  botonAmarillo.style.backgroundColor = "yellow"; // Pone el fondo del botón amarillo.
});

// Ejercicio 17: el evento mouseout se dispara al quitar el ratón de encima.
botonAmarillo.addEventListener("mouseout", () => {
  botonAmarillo.style.backgroundColor = ""; // Vacío = quita el color y vuelve al original.
});

// Ejercicio 18: el evento dblclick se dispara con un doble clic.
tituloDuro.addEventListener("dblclick", () => {
  tituloDuro.textContent = "¡Me rompiste!"; // Cambia el texto del título.
});

// Ejercicio 19: el evento keyup se dispara al soltar una tecla.
cajaTeclas.addEventListener("keyup", () => {
  // Crea un color aleatorio en formato hexadecimal, por ejemplo "#3fa2c1":
  // Math.random() da un número entre 0 y 1, 16777215 es el mayor color (ffffff),
  // toString(16) lo pasa a hexadecimal y padStart rellena con ceros hasta 6 cifras.
  const color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  cuerpo.style.backgroundColor = color; // Pinta el fondo de la página con ese color.
});

// Ejercicio 20: classList.add añade una clase ya definida en el CSS.
botonMagico.addEventListener("click", () => {
  parrafoMagico.classList.add("clase-magica"); // add() la pone y no la quita aunque se pulse otra vez.
});

// Ejercicio 21: classList.toggle pone la clase si no está y la quita si está.
botonNoche.addEventListener("click", () => {
  contenedorNoche.classList.toggle("noche"); // Alterna el modo noche solo en esta caja.
  // Con la clase .noche la luz está apagada, así que el botón ofrece encenderla; si no, apagarla.
  botonNoche.textContent = contenedorNoche.classList.contains("noche")
    ? "Encender"
    : "Apagar";
});

// Ejercicio 22: style.opacity cambia la opacidad directamente; la transición del CSS hace que tarde 2 segundos.
botonSecreto.addEventListener("click", () => {
  cajaSecreta.style.opacity = 1; // 1 = totalmente visible.
});

// Vuelve a dejar la caja invisible (también en 2 segundos) para regresar al estado inicial.
botonEsconder.addEventListener("click", () => {
  cajaSecreta.style.opacity = 0; // 0 = invisible (pero sigue ocupando su espacio).
});

// Ejercicio 23: className reemplaza todas las clases del elemento de golpe.
// Cada botón se busca y se le conecta su evento en la misma línea.
document.getElementById("boton-fuego").addEventListener("click", () => {
  personaje.className = "fuego"; // Disfraz de fuego: fondo rojo y borde naranja.
});
document.getElementById("boton-agua").addEventListener("click", () => {
  personaje.className = "agua"; // Disfraz de agua: celeste y redondo.
});
document.getElementById("boton-tierra").addEventListener("click", () => {
  personaje.className = "tierra"; // Disfraz de tierra: marrón con borde verde.
});

// Ejercicio 24: el evento input se dispara cada vez que cambia el valor del input.
const selectorColor = document.getElementById("selector-color"); // Busca el selector de color.
const lienzo = document.getElementById("lienzo"); // Busca la caja grande que se pinta.

selectorColor.addEventListener("input", () => {
  lienzo.style.backgroundColor = selectorColor.value; // value es el color elegido, por ejemplo "#ff0000".
});

// Ejercicio 25: al pasar el ratón por encima, el botón salta a otra posición dentro de la celda.
const arena = document.getElementById("arena"); // Busca la celda grande donde se mueve el botón.
const botonEscurridizo = document.getElementById("boton-escurridizo"); // Busca el botón que huye.

botonEscurridizo.addEventListener("mouseover", () => {
  // El máximo se calcula con el tamaño de la celda, para que el botón no se salga de ella.
  const maxLeft = arena.clientWidth - botonEscurridizo.offsetWidth; // Máxima distancia desde la izquierda.
  const maxTop = arena.clientHeight - botonEscurridizo.offsetHeight; // Máxima distancia desde arriba.
  botonEscurridizo.style.left = Math.random() * maxLeft + "px"; // Posición horizontal aleatoria.
  botonEscurridizo.style.top = Math.random() * maxTop + "px"; // Posición vertical aleatoria.
});
