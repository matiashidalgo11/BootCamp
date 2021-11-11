// Ejercicio Nº 1
// Matias olvidó el nombre de sus conocidos y otras cosas.
// Dando un string determinado tiene que devolver la relación que tiene
// Ricardo = "Ricardo es tu tio", Roberto = "Roberto es tu hermano", Argentina = "El país al que perteneces"
// Dinamita = "Es tu gato"

function recordatorio(srcCadena){
    switch (srcCadena){
        case "Ricardo":
        return "Ricardo es tu tio";
        break;

        case "Roberto":
        return"Roberto es tu hermano";
        break;

        case "Argentina":
        return"El país al que perteneces";
        break;

        case "Dinamita":
        return"Es tu gato";
        break;

        default:
        return "No existe una relacion";
        break;
    }
}



// Ejercicio Nº2
// Crear una función que tome como parametro 2 numeros y retorne true si alguno es 100 o si la suma de ambos es 100

function isCien(srcNumA, srcNumB){

    if(srcNumA === 100 || srcNumB === 100 || srcNumA + srcNumB === 100) return true;

    return false;
}

// Ejercicio Nº3
// Pasado un string "index.html", "script.js" debe devolver la extension del archivo ej: ".js"

function extensionArchivo(srcArchivo){

    let division = srcArchivo.split(".");

    let ext = division[1];

    if(ext === undefined) return console.error("No tiene extension");

    return "." + ext;
}

console.log(extensionArchivo("index.html"));

// Ejercicio Nº4
// Crear dos funciones una que convierta los grados Cº a Fº y viceversa
// ºF = (ºC · 1.8) + 32
// ºC = (ºF -32) / 1.8

function fahrenheitToCentigrados(srcF){
    return (srcF -32) / 1.8;
}

function centigradosToFahrenheit(srcC){
    return ((srcC -32) / 1.8)
}

/*  Ejercicio Nº5
    Crear una función que muestre por consola la fecha y hora con el siguiente formato:
    Hoy es : Miercoles
    Hora actual: 10:34
*/


function fechaHora(){

    let now = new Date();

    let dias = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");

    let resultado = `Hoy es : ${dias[now.getDay()]} \n`;

    resultado += `Hora Actual : ${now.getHours()}:${now.getMinutes()}`;

    console.log(resultado);
}

fechaHora();