/* 1-
 str = "origin"
  cambiar las vocales por el numero 1
  output => 1r1g1n
 */ 



function cambiarVocales(srcCadena){
    
    let expReg = /[aeiou]/gi;

    let result = srcCadena.replace(expReg,"1");

   return result;

}

cambiarVocales("origin");


/*=========================================================== */


/* 2-
 Crear una función que acepte un parámetro con los valores desde 1 hasta 5
 si valor numérico ingresado es 1 mostrar una lista del 1 al 10, si es 2 mostrar del 2 al 10,
 teniendo en cuenta el limite es 10
  posibles salidas esperadas:
  output => 1...10
  output => 2...10
  output => 3...10
  output => 4...10
  output => 5...10*/


  function mostrarNum(srcNum){

    let result = []

    if(srcNum > 5 || srcNum <= 0) return result;

    for(let i = srcNum; i < 11; i++){
        result.push(i);
    }

    return result;

  }


mostrarNum(6);

/*=========================================================== */


/* 3-
  arr = [10, "20", 30, "40", 50]
  verificar cada elemento sea de  tipo number y sino lo es cambiar su  tipo
  a number
  output => [10, 20, 30, 40, 50] */


function verificarNum(srcArr){

    let result = [];
    let length = srcArr.length;

    for(let i = 0; i < length; i++){

        let valor = srcArr[i];

        if(typeof valor === 'string') valor = Number(valor);

        result.push(valor);
    }

    return result;

}

console.log(verificarNum([10, "20", 30, "40", 50]));

/*=========================================================== */

/* 
4-
  arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
  eliminar los elementos repetidos, nota: (el segundo elemento repetido)
  output => [2, 4, 7, 1,  "foo", "bar", "qux", 3]
*/

function eliminarRepetidos(srcArr){

    
    let length = srcArr.length;
    let contador = 0;
    
    for(let j = 0; j < length; j++){

        valor = srcArr[j];

        for(let i = 0; i < length; i++){

        
            if(valor === srcArr[i]) {
            
                contador++;
                
                if(contador > 1) srcArr.splice(i,1);
            
            }

        }

        contador = 0;    

    }
    
    console.log(srcArr);
    
}

eliminarRepetidos([2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]);

/*=========================================================== */