const d = document;
/* Ejercicio Nº1:
Tomar TODOS los elementos <p> de la página y cambiar el color de fondo
(crear varios elementos) */

const buttonChange = d.querySelector(".button-parrafos");

const changePBackground = () => {
    let listP = d.querySelectorAll("p");
    let length = listP.length;
    for(let i = 0; i < length; i++){

        if(listP[i].style.background === "red") {
            listP[i].style.background = "none";
        }else{
             listP[i].style.background = "red";
        }
       
    }
}

buttonChange.addEventListener('click', changePBackground);



/* Ejercicio Nº2:
Contar la cantidad de palabras dentro de los elementos <p> e insertar al principio de la página la cantidad */

const listParrafos = d.querySelectorAll("p");
const main = d.querySelector("main");
const containerCards = d.querySelector(".container-cards");

const contarPalabrasDeTodosLosP = () => {
    
    let contador = 0;
    let length = listParrafos.length;

    for(let i = 0; i < length; i++){

        let contenido = listParrafos[i].innerHTML;
        contador += contenido.split(" ").length;
    }

    return contador;
}

let h1 = d.createElement('h1');

h1.textContent = `La cantidad de palabras que se encuentran en todos los parrafos es: ${contarPalabrasDeTodosLosP()}`;

main.insertBefore(h1,containerCards);



/* Ejercicio Nº3:
Crear un anchor que el link sea https://www.google.com.ar/
al clickearlo no permitir que salga de la página en la que estas y muestre la dirección en un elemento del html */

const google = d.querySelector(".google");

google.addEventListener('click', e => {

    e.preventDefault();
    google.style.background = (google.style.background === 'red')? 'none' : 'red';
    google.innerHTML = (google.innerHTML === 'Ir a google')? 'No vas a ir a google' : 'Ir a google';

});


/* Ejercicio Nº4:
Crear un elemento <img> que contenga una imagen a elección */

const contenedor = d.querySelector('container-img');

const img = d.createElement("img");
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2021/09/24/02/48/sea-6651168_960_720.jpg');
img.setAttribute('height', '250px');
img.setAttribute('width', '250px');
img.style.display = 'block';

main.appendChild(img);