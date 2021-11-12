/* 1-
 arr = [1,3,4,2,6,7,9,1,8]
Crear una función que indique el total de elementos impares de un array
 output => 5 */

 arrUno = [1,3,4,2,6,7,9,1,8];

 function cantImpares(srcArr){
    
    let result = 0;

    srcArr.map(elem => {if(elem % 2 !== 0) result++;});

    return result;
 }

 console.log(cantImpares(arrUno));

/* 2-
  str = "hola mundo desde javascript"
  pasar un string en array, indicar los espacios en blanco por "-"
  output => ["hola","-","mundo", "-", "desde", "-", "javascript"] */

str = "hola mundo desde javascript"

function stringToArray(srcStr){


    let strNuevo = srcStr.replaceAll(" ", " - ");
    let result = strNuevo.split(" ");
    console.log(result);
}

/* stringToArray(str); */



/* 3-
Crear una variable que contenga el siguiente array :
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Definir una variable filtered que muestre los valores de los los numeros que son pares utilizando el método .filter() */

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtered = arr3.filter(elem => elem%2 === 0);

console.log(filtered);



/* 
4- Crear una variable que filtre los animales que no sean 'cat' usar filter
const pets = ['cat', 'dog', 'elephant','hawk','snake','cat'] */

const pets = ['cat', 'dog', 'elephant','hawk','snake','cat'];

const isCat = pets.filter(animal => animal === 'cat');

console.log(isCat);


/* 5- Crear una variable que muestre solo los nombres de los productos del siguiente array
hacerlo con .map
const productos = [
    {id:2, nombre: 'Remera muy fachera', precio:250},
    {id:5, nombre: 'Pantalon muy fachero', precio:400},
    {id:6, nombre: 'Camperon invierno', precio:699},
    {id:34, nombre: 'Guantes negros', precio:199},
]; */

const productos = [
    {id:2, nombre: 'Remera muy fachera', precio:250},
    {id:5, nombre: 'Pantalon muy fachero', precio:400},
    {id:6, nombre: 'Camperon invierno', precio:699},
    {id:34, nombre: 'Guantes negros', precio:199},
];

const verNombres = (srcArray) => srcArray.map(obj => console.log(obj.nombre) );

verNombres(productos);


/* 6-  Usando el reduce retornar un solo array. pista: .concat
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; */

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function reducer(srcArr){

    const reducer = (prev, curr) => prev.concat(curr);

    let result = srcArr.reduce(reducer);

    console.log(result);

}

reducer(data);

