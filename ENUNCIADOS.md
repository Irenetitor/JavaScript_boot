# Enunciados de los ejercicios

Cada ejercicio tiene su bloque en [index.html](index.html), su estilo en [asserts/CSS/style.css](asserts/CSS/style.css) y su lógica en [js/script.js](js/script.js).

## Ejercicio 1: Cambiar el color de fondo de la página

**El Reto:** Haz que un botón cambie el color de fondo de toda la página a rojo al hacer clic, y que otro botón cambie solo su propio color a rojo.

**Pista de detective:** Para cambiar algo desde JavaScript, atrapa el elemento por su `id` y usa `classList.toggle()` con una clase definida en el CSS.

_Texto reconstruido a partir del código: no es el enunciado original._

## Ejercicio 2: Cambiar el tamaño de fuente

**El Reto:** Haz que un botón aumente el tamaño de la letra del título de la página al hacer clic.

**Pista de detective:** Define en el CSS una clase con un `font-size` mayor y alterna esa clase con `classList.toggle()`.

_Texto reconstruido a partir del código: no es el enunciado original._

## Ejercicio 3: Mover texto

**El Reto:** Haz que un botón mueva el título de la página desde la izquierda hasta el centro al hacer clic.

**Pista de detective:** Investiga la propiedad CSS `text-align` y alterna una clase con `classList.toggle()`.

_Texto reconstruido a partir del código: no es el enunciado original._

## Ejercicio 4: Esquinas redondeadas del cuadrado

**El Reto:** Dibuja un cuadrado visible desde que carga la página. Haz que un botón redondee o vuelva a poner normales sus esquinas, y que el texto del botón cambie según el estado.

**Pista de detective:** Investiga la propiedad CSS `border-radius`. Con `classList.contains()` puedes saber si el elemento ya tiene una clase.

_Texto reconstruido a partir del código: no es el enunciado original._

## Ejercicio 5: El texto cambia al color del fondo

**El Reto:** Haz que un párrafo cambie su color de texto al color del fondo de la página al pulsar un botón, de modo que parezca que desaparece.

**Pista de detective:** Alterna con `classList.toggle()` una clase que ponga el texto del mismo color que el fondo.

_Texto reconstruido a partir del código: no es el enunciado original._

## Ejercicio 6: Ocultar un botón

**El Reto:** Haz que un botón se oculte de la página al hacer clic en él.

**Pista de detective:** Investiga la propiedad CSS `display` y su valor `none`.

_Texto reconstruido a partir del código: no es el enunciado original._

## Ejercicio 7: Cambio de foto

**El Reto:** Haz que al pulsar un botón cambie la imagen de la página por otra distinta.

**Pista de detective:** Una imagen `<img>` puede cambiarse desde CSS con la propiedad `content: url(...)`. Alterna una clase con `classList.toggle()`.

_Texto reconstruido a partir del código: no es el enunciado original._

## Ejercicio 8: Destino de URL engañoso

**El Reto:** Crea un botón que diga "Ir a Disney" pero que, al hacer clic, te lleve a otra página distinta.

**Pista de detective:** Investiga `window.location.href` para cambiar de página desde JavaScript.

_Texto reconstruido a partir del código: no es el enunciado original._

## Ejercicio 9: valor de un input

**El Reto:** Crea una caja donde la gente escribe su nombre (`<input>`). Al darle a un botón, la caja debe rellenarse sola con el texto "¡Hola, soy un robot!".

**Pista de detective:** Las cajas de texto guardan su información en una propiedad llamada "valor" (`value` en inglés).

## Ejercicio 10: deshabilitar un botón

**El Reto:** Haz que un botón se "apague" (que ya no se pueda hacer clic en él y se vea gris) después de pulsarlo una vez.

**Pista de detective:** Investiga la propiedad `disabled` (desactivado) en JavaScript. ¡Acepta valores especiales, busca cuáles son!

## Ejercicio 11: clonar un párrafo

**El Reto:** Crea un párrafo y un botón. Al pulsar el botón, el párrafo debe clonarse y aparecer una copia justo debajo del original.

**Pista de detective:** Investiga el método `cloneNode(true)` y cómo insertar el clon en la página.

_Texto reconstruido a partir del código: no es el enunciado original._

## Ejercicio 12: crear un botón desde JavaScript

**El Reto:** Crea un botón vacío desde JavaScript (sin tocar el HTML), ponle de texto "Soy nuevo" y pégalo en la página.

**Pista de detective:** Es igual que la misión anterior, pero creando un elemento tipo `button`. ¡Recuerda ponerle texto antes de pegarlo en la página!

## Ejercicio 13: un h2 dentro de un div

**El Reto:** Crea desde JavaScript un título `<h2>` con el texto "¡Sorpresa!", pero en lugar de pegarlo al final, debes meterlo dentro de una cajita `div` que ya existe en el HTML.

**Pista de detective:** Primero atrapa el `div` con la fórmula de búsqueda, y luego pégale el título adentro con tu acción favorita (`appendChild`).

## Ejercicio 14: imagen creada con JavaScript

**El Reto:** No pongas ninguna imagen en tu HTML. Solo con JavaScript, crea la imagen, ponle su ruta (su enlace de internet) y haz que aparezca en pantalla.

**Pista de detective:** Combina `document.createElement`, le asignas su ruta, y luego lo pegas en el cuerpo de la página.

## Ejercicio 15: innerHTML

**El Reto:** Cambia el contenido de un párrafo vacío para que diga "Hola" pero que esté en texto muy gordito y negro (negrita).

**Pista de detective:** Hasta ahora cambiaste textos normales, pero investiga qué es `innerHTML`. ¡Te permite inyectar etiquetas HTML como `<b>` o `<strong>` escritas entre las comillas!

## Ejercicio 16: pasar el ratón por encima

**El Reto:** Haz que un botón cambie de color a amarillo ¡sin hacerle clic! Solo con pasar el ratón por encima.

**Pista de detective:** Vas a usar `addEventListener`, pero la palabra mágica ya no es "click". Busca en internet "evento de pasar el ratón por encima en JavaScript".

## Ejercicio 17: quitar el ratón de encima

**El Reto:** El complemento de la misión anterior. Cuando quites el ratón de encima del botón, este debe volver a su color original.

**Pista de detective:** Busca cuál es el evento hermano para cuando el ratón "sale" o "se va" del elemento.

## Ejercicio 18: doble clic

**El Reto:** Este título es muy duro. No hace nada con un clic normal, pero si le das dos clics súper rápidos, su texto cambia a "¡Me rompiste!".

**Pista de detective:** Existe un evento especial solo para los dobles clics. ¿Cómo se dirá "doble clic" en inglés?

## Ejercicio 19: soltar una tecla

**El Reto:** Crea una caja de texto (`<input>`). Cada vez que levantes el dedo después de apretar una tecla, debe cambiar el color de fondo de la página.

**Pista de detective:** Busca eventos de teclado en JavaScript. Hay uno que se activa justo cuando la tecla sube (key up).

## Ejercicio 20: classList.add

**El Reto:** En tu archivo de estilos (CSS), crea una "clase" llamada `.clase-magica` que tenga color verde, borde rojo y letras grandes. Desde JavaScript, ponle esa clase a un elemento al hacer clic.

**Pista de detective:** Los elementos de HTML tienen una lista de clases. Investiga cómo se usa `classList.add()` en JavaScript. ¡Es como ponerle un disfraz prefabricado!

## Ejercicio 21: modo noche

**El Reto:** Crea una página con título y texto. En CSS, crea una clase llamada `.noche` que tenga fondo negro y letras blancas. Haz un botón que, al pulsarlo, le ponga la clase `.noche` a la página, y si lo vuelves a pulsar, se la quite. ¡Como apagar y prender la luz!

**Pista de detective:** Como aún no sabemos enseñarle a la computadora a decidir ("si está prendido, apágalo"), JavaScript tiene una palabra mágica que significa "alternar". Investiga sobre `classList.toggle()`... ¡Hace todo el trabajo pesado de poner y quitar la clase por ti!

_Variación hecha aquí: el efecto se aplica dentro de un contenedor y el botón cambia su texto entre "Apagar" y "Encender"._

## Ejercicio 22: opacity y transition

**El Reto:** Crea una caja (`div`) en HTML con un mensaje secreto. En CSS, haz que sea invisible (pero que siga ocupando su espacio) y ponle un efecto para que los cambios tarden 2 segundos en ocurrir. Con JS, haz que un botón la vuelva completamente visible.

**Pista de detective:** Para CSS, investiga la propiedad `opacity` (opacidad) y ponla en 0. Para que sea lento y mágico, busca en CSS la propiedad `transition`. En JS, solo tienes que cambiarle la opacidad a 1 usando la Fórmula de Asignación (`style`).

_Variación hecha aquí: un segundo botón "Esconder mensaje" vuelve a dejar la caja invisible._

## Ejercicio 23: className

**El Reto:** Dibuja un cuadrado en tu HTML (será tu personaje). Crea 3 botones: "Fuego", "Agua" y "Tierra". En tu CSS, prepara tres clases diferentes (ej: `.fuego` con fondo rojo y bordes naranjas, `.agua` celeste y redondo...). Con JS, haz que cada botón le asigne su disfraz (clase) correspondiente al personaje.

**Pista de detective:** Recuerda tener tu archivo `.css` bien conectado en el `<head>`. Luego, en JS, atrapa tu personaje y usa `className` para cambiarle el traje completo de golpe.

## Ejercicio 24: selector de color

**El Reto:** En HTML existe una etiqueta especial para elegir colores. Ponla en tu página junto con una caja grande y vacía (un `div` que será tu lienzo). Cada vez que elijas un color nuevo, la caja grande debe pintarse de ese color.

**Pista de detective:** Para el HTML, busca `<input type="color">`. Para el JS, recuerda que las cajas de input guardan su información en una propiedad llamada `value`. ¡Usa un evento diferente al clic (busca el evento `input` o `change`) para robar ese color y ponérselo al fondo de tu caja!

## Ejercicio 25: botón escurridizo

**El Reto:** Crea un botón muy bonito usando CSS (bordes redondeados, sombra, un color llamativo). En JS, haz que cuando el ratón pase por encima del botón (sin hacer clic), el botón cambie mágicamente a una posición distinta de la pantalla para que no lo puedan atrapar.

**Pista de detective:** En CSS, ponle al botón `position: absolute` para que pueda volar libre por la pantalla. En JS, cuando ocurra el evento del ratón encima, asígnale valores nuevos de distancia a `style.top` y `style.left` (por ejemplo: `"200px"`). ¡Tratarán de darle clic y se moverá!

_Variación hecha aquí: el botón se mueve dentro de una celda grande (`#arena`) y no por toda la pantalla._
