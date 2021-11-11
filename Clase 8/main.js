/* Ejercicio 1 */

let num = 10;
let cadena = "";
let array = [];
let array2 = [10,true,"foo"];
let obj = {};

/* Ejercicio 2 */

let valor = "smith";
console.log(valor);

/* Ejercicio 3 */

function sumar(a, b){
    return a + b;
}

console.log(5,5);

/* Ejercicio 4 */

function mostrarNombre(){

    let name = globalThis.prompt("Escriba un nombre");
    console.log(name);
}


/* Ejercicio 5 */

function mostrarNombreP(name){
    console.log(name);
}

/* Ejercicio 6 */

let datos = "foo";

function uppercase(cadena){

    console.log(cadena.toUpperCase());

}

uppercase(datos);

/* Ejercicio 7 */

let datos7 = "FOO";

function lowercase(cadena){

    console.log(cadena.toLowerCase());

}

lowercase(datos);

/* Ejercicio 8 */

let info = "lorem ipsum scammer"

function separarCadena(cadena){

    return cadena.split(" ");
}

console.log(separarCadena(info));

/* Ejercicio 9 */

let infoArray = ["lorem", "ipsum", "scammer"]

function arrayToString(array){
    return array.toString();
}

console.log(arrayToString(infoArray));

/* Ejercicio 10 */


function mostrarPrimerElemento(array){
    console.log(array[0]);
}

mostrarPrimerElemento(array2);

/* Ejercicio 11 */

function agregarElemento(array, dato){
    array.push(dato);
    console.log(array);
}

agregarElemento(infoArray,"simply");

/* Ejercicio 12 */

function quitarPrimerElemento(array){
    array.shift();
    console.log(array);
}

quitarPrimerElemento(infoArray);

/* Ejercicio 13 */

function cantElementosArray(array){
    console.log("Cantidad de Elementos del array: " + array.length);
}

cantElementosArray(infoArray);

/* Ejercicio 14 */

let array14 = ['ipsum', 'scammer', 'simply'];

function convertirMayuscula(array, palabra){

    for(let i = 0; i < array.length; i++){

        if(array[i] === palabra) array[i] = palabra.toUpperCase();
    }

    console.log(array);
}

convertirMayuscula(array14,'simply');

/* Ejercicio 15 */

function esPar(cadena){

    return (cadena.length % 2 === 0)? true: false;

}

console.log(esPar("Hol"));

/* Ejercicio 16 */

function esMayor(numberA, numberB){
    return(numberA > numberB)? true : false;
}

/* Ejercicio 17 */

function esMayorEdad(edad){
    
    /* switch(edad){

    case (edad < 21) :
        return true;
        break;

    case (edad >= 21) :
        return true;
        break;


    } */

    return (edad >= 21)? true : false;
    
}

console.log(esMayorEdad(22));

/* Ejercicio 18 */

function eliminarRepetidos(array, palabra){
    
    array = array.filter(dato => dato !== palabra);
    
    console.log(array);
}

eliminarRepetidos(array14,'ipsum');

/* Ejercicio 19 */

function sizeDeCadaElemento(array){

    let arraySize = [];

    for ( let data of array) {
       arraySize.push(data.length);
    }

    console.log(array);
    console.log(arraySize)
}

sizeDeCadaElemento(array14);

/* Ejercicio 20 */

let reporte="lorem ipsum scammer simply laboris sit amet";

function ultimoEjercicio(cadena){

    cadena = cadena.replace(/a/gi, 'x');

    cadena = cadena.replace(/[eiou]/g, (match) => match.toUpperCase());

    cadena = cadena.replace(cadena[0], cadena[0].toUpperCase());

    let ultPos = cadena.length - 1;

    cadena = cadena.split('');

    cadena[ultPos] = '@';

    let cantVocales = cadena.filter(letra => /[eiou]/gi.test(letra));

    cadena = cadena.join('');

    console.log("Cantidad vocales: " + cantVocales.length);

    console.log(cadena);

}

ultimoEjercicio(reporte);