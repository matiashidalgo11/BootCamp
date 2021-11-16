const boton = document.querySelector('.btn');
const input = document.querySelector('.input');
const contenido= document.querySelector('.content');

contenido.innerHTML = "Hola, como estas";

const changeContent = () => {
        contenido.innerHTML = input.value;
        contenido.style.background = 'red';
}

boton.addEventListener('click',changeContent);



/*
1. Crear una estructura de HTML básica con:
- Un botón
- Un H1
- Un input
cada una con una clase 
2. Agregar un script
y declarar lo siguiente

const boton = document.querySelector('.button')

const input = document.querySelector('.input')
const contenido= document.querySelector('.content') ( sería el h1 en este caso)


dentro de querySelector() va la clase de cada elemento ej ( '.button' )



miH.innerText accede al valor del h1 que declare

miH.innerText = 'Hola, como estas'
cambiaría el texto por lo que se asigne


accedemos al valor del input que declaramos arriba con input.value

console.log(input.value)


la siguiente linea cuando se clickea sobre "boton" se ejecuta "changeContent"


boton.addEventListener('click',changeContent);
Crear una función changeContent que cuando se ejecute
acceda al valor del h1 y le de el valor de input.value


El resultado de todo debería ser que cuando presionamos sobre el botón cambie el texto de h1 por lo ingresado en el input.
En caso de terminar se puede probar aparte de cambiar el valor agregar algún estilo al h1
contenido.style.background = 'red'
contenido.style.color = 'black'

*/

