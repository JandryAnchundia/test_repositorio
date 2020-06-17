'use strict'

/**
 * Hacer un programa que muestre todos los numeros introducidos por el usuario
 * 
 * 
 */

var numero1 = parseInt(prompt("Introduza su primero numero",0));
var numero2 = parseInt(prompt("Introduxa su segundo numero",0));

document.write("<h2> De "+numero1+" hasta el numero: "+numero2+"<h2>");


if(numero1<numero2){
    for(var i= numero1; i <=numero2; i++){

        document.write(i+"<br>");

    }

} else if (numero1>numero2){
     
    for(i= numero1; i >=numero2; i--){

        document.write(i+"<br/>");
}

}