# Enunciados de los ejercicios

Enunciados tomados de `js vanilla.pdf`. Cada ejercicio tiene su bloque en [index.html](index.html), su estilo en [asserts/CSS/style.css](asserts/CSS/style.css) y su lógica en [js/script.js](js/script.js).

## 🎨 Misiones de Pintura y Estilo (Asignación)

El objetivo aquí es cambiar cómo se ven las cosas usando la fórmula: `elemento.style.propiedad = "valor"`

### 1. Misión: El semáforo rojo

**El Reto:** Crea un botón. Al hacerle clic, el color de fondo de toda la página (body) debe volverse rojo.

**Pista de detective:** Investiga cómo se dice "color de fondo" en inglés. Recuerda que en JavaScript, si una palabra en inglés tiene dos partes (como background color), se escriben juntas y la segunda empieza con mayúscula.

### 2. Misión: Letras gigantes

**El Reto:** Tienes un título `<h1>` normal. Al pulsar un botón, ¡el texto debe volverse gigantesco!

**Pista de detective:** Investiga qué propiedad de style en JavaScript sirve para cambiar el "tamaño de la fuente" (font size).

### 3. Misión: El texto que se mueve

**El Reto:** Haz que un párrafo que está a la izquierda se mueva exactamente al centro de la pantalla al hacer clic.

**Pista de detective:** En internet, busca "cómo alinear texto al centro con JavaScript". ¡La palabra mágica termina en Align!

### 4. Misión: Esquinas suavecitas

**El Reto:** Crea una caja cuadrada (un div con color). Al hacer clic, las esquinas del cuadrado deben volverse redonditas.

**Pista de detective:** Necesitas cambiar el "radio del borde" (border radius).

### 5. Misión: Letras invisibles

**El Reto:** Haz que, al pulsar un botón, el texto de un párrafo cambie al mismo color que tiene el fondo de la página, para que parezca que ha desaparecido.

**Pista de detective:** Solo necesitas saber el color exacto de tu fondo y aplicárselo al texto usando `style.color`.

## 👻 Misiones de Magia y Engaño (Atributos)

Aquí investigarán cómo cambiar características que están dentro de las etiquetas HTML.

### 6. Misión: El botón fantasma

**El Reto:** Al hacer clic en un botón, ¡el botón debe desaparecer por completo de la página!

**Pista de detective:** Busca en internet "cómo ocultar un elemento con display en JavaScript". ¡Hay un valor que significa "ninguno" en inglés!

### 7. Misión: El cambia-caras (Imágenes)

**El Reto:** Pon una imagen de un perrito. Al hacer clic en un botón, la imagen debe cambiar por la de un gatito.

**Pista de detective:** ¿Recuerdas qué atributo de HTML usas para poner la ruta de una imagen? ¡En JavaScript puedes asignarle una nueva ruta a esa misma propiedad!

### 8. Misión: El enlace mentiroso

**El Reto:** Crea un enlace que diga "Ir a Disney". Pero al hacer clic en un botón mágico, si alguien pulsa el enlace, lo llevará a Wikipedia.

**Pista de detective:** Los enlaces usan el atributo `href` para saber a dónde ir. ¡Cámbialo con la fórmula de asignación!

### 9. Misión: La caja pre-escrita

**El Reto:** Crea una caja donde la gente escribe su nombre (`<input>`). Al darle a un botón, la caja debe rellenarse sola con el texto "¡Hola, soy un robot!".

**Pista de detective:** Las cajas de texto guardan su información en una propiedad llamada "valor" (`value` en inglés).

### 10. Misión: El botón congelado

**El Reto:** Haz que un botón se "apague" (que ya no se pueda hacer clic en él y se vea gris) después de pulsarlo una vez.

**Pista de detective:** Investiga la propiedad `disabled` (desactivado) en JavaScript. ¡Acepta valores especiales, busca cuáles son!

## 🏗 Misiones de Constructores (Crear elementos)

Practicarán la fórmula de buscar/crear y luego la acción de agregar (`appendChild`).

### 11. Misión: El clonador de párrafos

**El Reto:** Cada vez que hagas clic en el botón principal, debe aparecer un párrafo nuevo al final de la página que diga "¡Me he clonado!".

**Pista de detective:** Necesitas la herramienta `document.createElement` para crear el párrafo de la nada.

_Nota: mi solución actual clona un párrafo existente con `cloneNode` y escribe "Soy el párrafo clonado", así que no sigue exactamente este enunciado._

### 12. Misión: Lluvia de botones

**El Reto:** Crea un botón vacío desde JavaScript (sin tocar el HTML), ponle de texto "Soy nuevo" y pégalo en la página.

**Pista de detective:** Es igual que la misión anterior, pero creando un elemento tipo `button`. ¡Recuerda ponerle texto antes de pegarlo en la página!

### 13. Misión: El título impostor

**El Reto:** Crea desde JavaScript un título `<h2>` con el texto "¡Sorpresa!", pero en lugar de pegarlo al final, debes meterlo dentro de una cajita `div` que ya existe en el HTML.

**Pista de detective:** Primero atrapa el `div` con la fórmula de búsqueda, y luego pégale el título adentro con tu acción favorita (`appendChild`).

### 14. Misión: La imagen invocada

**El Reto:** No pongas ninguna imagen en tu HTML. Solo con JavaScript, crea la imagen, ponle su ruta (su enlace de internet) y haz que aparezca en pantalla.

**Pista de detective:** Combina `document.createElement`, le asignas su ruta, y luego lo pegas en el cuerpo de la página.

### 15. Misión: El mensaje en negrita

**El Reto:** Cambia el contenido de un párrafo vacío para que diga "Hola" pero que esté en texto muy gordito y negro (negrita).

**Pista de detective:** Hasta ahora cambiaste textos normales, pero investiga qué es `innerHTML`. ¡Te permite inyectar etiquetas HTML como `<b>` o `<strong>` escritas entre las comillas!

## ⚡ Misiones de Súper Reflejos (Nuevos Eventos)

Hasta ahora solo conocen el clic. Aquí investigarán qué otras cosas pueden despertar a JavaScript.

### 16. Misión: El botón asustadizo

**El Reto:** Haz que un botón cambie de color a amarillo ¡sin hacerle clic! Solo con pasar el ratón por encima.

**Pista de detective:** Vas a usar `addEventListener`, pero la palabra mágica ya no es "click". Busca en internet "evento de pasar el ratón por encima en JavaScript".

### 17. Misión: El botón valiente

**El Reto:** El complemento de la misión anterior. Cuando quites el ratón de encima del botón, este debe volver a su color original.

**Pista de detective:** Busca cuál es el evento hermano para cuando el ratón "sale" o "se va" del elemento.

### 18. Misión: El doble golpe

**El Reto:** Este título es muy duro. No hace nada con un clic normal, pero si le das dos clics súper rápidos, su texto cambia a "¡Me rompiste!".

**Pista de detective:** Existe un evento especial solo para los dobles clics. ¿Cómo se dirá "doble clic" en inglés?

### 19. Misión: El espía del teclado

**El Reto:** Crea una caja de texto (`<input>`). Cada vez que levantes el dedo después de apretar una tecla, debe cambiar el color de fondo de la página.

**Pista de detective:** Busca eventos de teclado en JavaScript. Hay uno que se activa justo cuando la tecla sube (key up).

### 20. Misión: El camaleón de etiquetas

**El Reto:** En tu archivo de estilos (CSS), crea una "clase" llamada `.clase-magica` que tenga color verde, borde rojo y letras grandes. Desde JavaScript, ponle esa clase a un elemento al hacer clic.

**Pista de detective:** Los elementos de HTML tienen una lista de clases. Investiga cómo se usa `classList.add()` en JavaScript. ¡Es como ponerle un disfraz prefabricado!

## 🎭 Misiones de Transformación Total (HTML + CSS + JS)

### 21. Misión: El Modo Nocturno (El interruptor mágico)

**El Reto:** Crea una página con título y texto. En CSS, crea una clase llamada `.noche` que tenga fondo negro y letras blancas. Haz un botón que, al pulsarlo, le ponga la clase `.noche` a la página, y si lo vuelves a pulsar, se la quite. ¡Como apagar y prender la luz!

**Pista de detective:** Como aún no sabemos enseñarle a la computadora a decidir ("si está prendido, apágalo"), JavaScript tiene una palabra mágica que significa "alternar". Investiga sobre `classList.toggle()`... ¡Hace todo el trabajo pesado de poner y quitar la clase por ti!

_Variación hecha aquí: el efecto se aplica dentro de un contenedor y el botón cambia su texto entre "Apagar" y "Encender"._

### 22. Misión: La carta secreta que aparece lentamente

**El Reto:** Crea una caja (`div`) en HTML con un mensaje secreto. En CSS, haz que sea invisible (pero que siga ocupando su espacio) y ponle un efecto para que los cambios tarden 2 segundos en ocurrir. Con JS, haz que un botón la vuelva completamente visible.

**Pista de detective:** Para CSS, investiga la propiedad `opacity` (opacidad) y ponla en 0. Para que sea lento y mágico, busca en CSS la propiedad `transition`. En JS, solo tienes que cambiarle la opacidad a 1 usando la Fórmula de Asignación (`style`).

_Variación hecha aquí: un segundo botón "Esconder mensaje" vuelve a dejar la caja invisible._

### 23. Misión: El probador de disfraces

**El Reto:** Dibuja un cuadrado en tu HTML (será tu personaje). Crea 3 botones: "Fuego", "Agua" y "Tierra". En tu CSS, prepara tres clases diferentes (ej: `.fuego` con fondo rojo y bordes naranjas, `.agua` celeste y redondo...). Con JS, haz que cada botón le asigne su disfraz (clase) correspondiente al personaje.

**Pista de detective:** Recuerda tener tu archivo `.css` bien conectado en el `<head>`. Luego, en JS, atrapa tu personaje y usa `className` para cambiarle el traje completo de golpe.

### 24. Misión: La paleta del pintor

**El Reto:** En HTML existe una etiqueta especial para elegir colores. Ponla en tu página junto con una caja grande y vacía (un `div` que será tu lienzo). Cada vez que elijas un color nuevo, la caja grande debe pintarse de ese color.

**Pista de detective:** Para el HTML, busca `<input type="color">`. Para el JS, recuerda que las cajas de input guardan su información en una propiedad llamada `value`. ¡Usa un evento diferente al clic (busca el evento `input` o `change`) para robar ese color y ponérselo al fondo de tu caja!

### 25. Misión: La caja que huye de ti

**El Reto:** Crea un botón muy bonito usando CSS (bordes redondeados, sombra, un color llamativo). En JS, haz que cuando el ratón pase por encima del botón (sin hacer clic), el botón cambie mágicamente a una posición distinta de la pantalla para que no lo puedan atrapar.

**Pista de detective:** En CSS, ponle al botón `position: absolute` para que pueda volar libre por la pantalla. En JS, cuando ocurra el evento del ratón encima, asígnale valores nuevos de distancia a `style.top` y `style.left` (por ejemplo: `"200px"`). ¡Tratarán de darle clic y se moverá!

_Variación hecha aquí: el botón se mueve dentro de una celda grande (`#arena`) y no por toda la pantalla._
