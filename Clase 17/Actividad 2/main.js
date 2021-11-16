const d = document;

/* 1.
Crear un boton que al ser clickeado muestre/oculte un elemento (toggle) */

const containerActividadUno = d.querySelector('.container-actividad1');
const buttomOcultar = d.createElement('button');

buttomOcultar.setAttribute('display','inline-block');
buttomOcultar.innerHTML = 'Ocultar caja';

buttomOcultar.addEventListener('click',() => {

    let caja = d.querySelector('.caja');
    
    caja.style.display = (caja.style.display === 'none')? 'block' : 'none';

    //Despues del primer intento aparece ocultar y no cambia.
    buttomOcultar.innerHTML = (buttomOcultar.innerHTML === 'Ocultar caja')? 'Mostrar' : 'Ocultar Caja';
});

containerActividadUno.appendChild(buttomOcultar);

/* 2.
Crear un <ul>.
Crear un input
Crear un li con el valor del input 
(como si fueran notas que vas agregando) */

const containerActividadDos = d.querySelector('.container-actividad2');
const buttomAgregarLista = d.querySelector('.agregarLista');

const ul = d.createElement('ul');
ul.textContent = 'Hola, soy una lista: ';
containerActividadDos.appendChild(ul);


buttomAgregarLista.addEventListener('click',(e) => {
  
    e.preventDefault();

    let contenido = d.querySelector('.contenido-lista').value;

    let li = d.createElement('li');

    li.textContent = contenido;

    ul.appendChild(li);
    

});



/* 3.
Usando new Date() insertar en el html el año actual junto a un saludo */

const containerActividadTres = d.querySelector('.container-actividad3');

let h2 = d.createElement('h2');

h2.innerHTML =`Estamos en el ${new Date().getFullYear()}. Bienvenido!`;

containerActividadTres.appendChild(h2);

/* 4.
Crear un contenedor de 400x400 con 2 botones.
Al ser clickeado el contenedor debe cambiar el background a rojo
Cada boton debe estar dentro del contenedor y al clickear dar un console.log('boton 1/2 se ejecuto') */

const main = d.querySelector('main');
const containerActividadCuatro = d.createElement('div');
const containerButtons = d.createElement('div');
const buttonUno = d.createElement('button');
const buttonDos = d.createElement('button');

containerButtons.style.cssText = "display:flex; justify-content: center; width: 100%;";

buttonUno.textContent = "Boton Uno";
buttonDos.textContent = "Boton Dos";

containerButtons.appendChild(buttonUno);
containerButtons.appendChild(buttonDos);

buttonUno.addEventListener('click', () => {
    containerActividadCuatro.style.backgroundColor = (containerActividadCuatro.style.backgroundColor === 'pink')? 'red' : 'pink';
    console.log('Boton 1 se ejecuto');
});

buttonDos.addEventListener('click', () => {
    containerActividadCuatro.style.backgroundColor = (containerActividadCuatro.style.backgroundColor === 'pink')? 'red' : 'pink';
    console.log('Boton 2 se ejecuto');
});

containerActividadCuatro.classList.add('containerActividadCuatro');

containerActividadCuatro.style.cssText = "width:500px; height:500px; background-color:pink; margin: 0 auto";

containerActividadCuatro.appendChild(containerButtons);


main.appendChild(containerActividadCuatro);




/* 5.
Crear un form completamente desde javascript
para insertar en nuestro html */

const form = d.createElement('form');
const h3Form = d.createElement('h3');

const containerName = d.createElement('div');

const labelName = d.createElement('label');
const inputName = d.createElement('input');

const containerApellido = d.createElement('div');

const labelApellido = d.createElement('label');
const inputApellido = d.createElement('input');
const buttonSubmit = d.createElement('button');

form.style.cssText = "display:flex; flex-direction: column;justify-content: space-between; align-items: center;width:500px; margin: 0 auto; background-color: red";


labelName.textContent = "Nombre: ";
labelName.setAttribute('for','name');
inputName.setAttribute('id','name');

containerName.style.cssText = "display:flex; justify-content: center; width:500px; margin: 10px";
containerName.appendChild(labelName);
containerName.appendChild(inputName);

labelApellido.textContent = "Apellido: ";
labelApellido.setAttribute('for','apellido');
inputApellido.setAttribute('id','apellido');

containerApellido.style.cssText = "display:flex;justify-content: center; width:500px; margin: 10px";
containerApellido.appendChild(labelApellido);
containerApellido.appendChild(inputApellido);

buttonSubmit.textContent = "Enviar";

h3Form.textContent = "Forumlario"

form.appendChild(h3Form);
form.appendChild(containerName);
form.appendChild(containerApellido);
form.appendChild(buttonSubmit);

main.appendChild(form);

