/* Ej-1  cadena = "javascript"; dada la anterior cadena colocar la primera letra en mayúscula
      output => Javascript */

function primerMayus(srcCadena){
    
    let primerChar = srcCadena[0];

    let result = srcCadena.replace(primerChar, primerChar.toUpperCase());

    return result;
}

/* console.log(primerMayus("javascript")); */


/* Ej-2 cadena = "javascript";  dada la anterior cadena colocar la ultima letra en mayúscula
    output => javascripT */


function ultimaMayus(srcCadena){

    let indexUltima = srcCadena.length-1;
    
    let ultimoChar = srcCadena[indexUltima];

    let result = srcCadena.slice(0, indexUltima) + ultimoChar.toUpperCase();

    return result;

}

/* ultimaMayus("javascript"); */

/* Ej-3 arr = ["foo", "bar", "baz", "qux", "origin"]
     buscar en ele array el elemento baz y mostrarlo console
     output =>  baz */

function searchString(srcArr, srcString){

    let length = srcArr.length;

    for(let i = 0; i < length; i++){
        if(srcString === srcArr[i]) return console.log(srcString);
    }

    console.log("No se encuentra la palabra en el array");

}

/* searchString(["foo", "bar", "baz", "qux", "origin"], "baz"); */

/* Ej-4 arr = ["foo", "bar", "baz", "qux", "origin"]
     vaciar el arr
     output => [ ] */

function vaciarArray(srcArr){

    let length = srcArr.length;

    for(let i = 0; i < length; i++){
        srcArr.pop();
    }

    return srcArr;
}

/* console.log(vaciarArray(["foo", "bar", "baz", "qux", "origin"])) */



/* Ej-5  1 str = "origin"
  eliminar las vocales del string
  output => rgn */

function deleteVocales(srcStr){
    
    const expReg = /aeiou/gi;

    let result = srcStr.replaceAll(expReg,"");

   return result;
}
