// Ejercicio Nº1:
// Crear una función que tome los años de una persona y retorne la edad en días

function edadToDias(edad) {
  return edad * 365;
}

console.log(edadToDias(22));

// Ejercicio Nº2:
// Crear una función que tome horas y las convierta a segundos

function horaToSegundos(horas) {
  return horas * 60 * 60;
}

console.log(horaToSegundos(1));

// Ejercicio Nº3:
// Crear una función que tome un array y devuelva un solo string de cada elemento separado por espacio.

function arrayToString(arreglo) {
  return arreglo.toString();
}

console.log(typeof arrayToString([1, 2, 3]));

// Ejercicio Nº4:
// Crear una funcion que tome un array y lo invierta

function arrayReverse(arreglo) {
  return arreglo.reverse();
}

console.log(arrayReverse([1, 2, 3]));

function arrayReverse2(arreglo) {
  let length = arreglo.length;
  let ultimaPos = length - 1;

  for (let i = 0; i < ultimaPos; i++) {
    let aux = arreglo[i];

    arreglo[i] = arreglo[ultimaPos];

    arreglo[ultimaPos] = aux;

    ultimaPos--;
  }

  return arreglo;
}

console.log(arrayReverse2([1, 2]));

// Ejercicio Nº5:
// Crear una funcion que tome un array y lo invierta sin cambiar el original.

function reverseCopia(arreglo) {
  let duplicado = [];

  for (let i = arreglo.length - 1; i >= 0; i--) {
    duplicado.push(arreglo[i]);
  }

  return duplicado;
}

let arregloOriginal = [1, 2, 3];

console.log("Duplicado: " + reverseCopia(arregloOriginal));
console.log(arregloOriginal);

// Ejercicio Nº6:
// Crear una función que concatene 2 arrays
/* Se puede crear un nuevo arreglo y recorrer los dos o usar el primero y agregarle los datos del segundo */
function concatenarArrays(array1, array2) {
  let nuevoArray = [];

  for (dato of array1) {
    nuevoArray.push(dato);
  }

  for (dato of array2) {
    nuevoArray.push(dato);
  }

  return nuevoArray;
}

console.log(concatenarArrays([1, 2, 3], [4, 5, 6]));

// Ejercicio Nº7:
//  Crear una función que retorne true si un array contiene un elemento

function contieneElementos(array) {
  return array.length > 0 ? true : false;
}

console.log(contieneElementos([1]));

// Ejercicio Nº8
// Crear una función que te diga si el ultimo caracter de un string es una b

function ultimoCaracter(cadena) {
  return cadena[cadena.length - 1] === "b" ? true : false;
}

console.log(ultimoCaracter("bob"));

// Ejercicio Nº9
// Crear una función que tome un string y cree uno nuevo utilizando las 3 primeras y ultimas letras,
// comprobar que el string de parametro mida al menos 6 caracteres

function nuevaPalabra(cadena) {
  if (cadena.length < 6)
    return console.error("La cadena no cumple con al menos 6 caracteres");

  let nuevaPalabra;

  nuevaPalabra =
    cadena.slice(0, 3) + cadena.slice(cadena.length - 3, cadena.length);

  return nuevaPalabra;
}

console.log(nuevaPalabra("Matias Matias"));

// Ejercicio Nº10
// Crear una función que tome dos strings y los concatene sin las primeras 2 letras

function concatenarPalabras(stringUno, stringDos) {
  let palabra;

  palabra = stringUno.slice(1) + stringDos.slice(1);

  return palabra;
}

console.log(concatenarPalabras("Hola", "Hola"));

// Ejercicio Nº11
// Comprobar entre dos valores cual es mas cercano al 100

/* Retorna false si el numero B es el mas cercano, caso contrario retorna true. */
function valorMasCercano(numA, numB) {
  if (numA === numB) return "Los numeros son iguales";
  else if (numA - 100 > numB - 100) return "El numero A es el mas cercano";
  else return "El numero B es el mas cercano";
}

console.log(valorMasCercano(12, 11));
