/* Ejercicio Nº1
Escribe una función que sume que calcule la suma de dígitos de un número entero es decir la suma de todos sus dígitos.
Ejemplo: suma de dígitos (192) debería devolver 12 (1+9+2)
*/

function separarDigitos(srcDigito){

    let digitoToString = srcDigito.toString();

    let separado = digitoToString.split("");

    let length = separado.length;

    let resp = 0;

    for(let i = 0; i < length; i++){
        resp += parseInt(separado[i])
    }

    return resp;

}

console.log(separarDigitos(10));

/* Ejercicio Nº2
Escriba una función que tome un string con una suma y devuelva su resultado como un número.
Deben sumarse dos números naturales(numeros enteros). La tarea de suma es una cadena de la forma '102 + 17'.
*/

function sumarString(srcSuma){

    let separar = srcSuma.split(" ");

    let numA = parseInt(separar[0]);

    let numB = parseInt(separar[2]);

    return numA + numB;

}

console.log(sumarString("1 + 2"))


/* Ejercicio Nº3
Escribir una función que genere un numero random y pregunte por prompt "Adivina un numero del 1 al 10"
hasta que acierte y muestre "Adivinaste el numero"*/

function adivinarNum(){

    let msg = "Adivina un numero del 1 al 10. Si ingresa 0 se cancelara el juego";
    let numElegido = Math.round(Math.random() * (1 + 10 - 1) + 1);
    let numUser;

    

    do {
        numUser = parseInt(prompt(msg));

        if(numUser === numElegido) {

        numUser = 0;
        console.log("Adivinaste el Numero!!!");

        }else{

            console.log("Intentelo de nuevo");

        } 

    } while (numUser !== 0);



}

adivinarNum();


