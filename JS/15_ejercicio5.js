'use strict'
/**
 * Muestre todos los numeros divisores de un numero en promnt
 */

 var numero= parseInt(prompt("Mete un un numero: ", 0));

 for(var i=1; i<=numero; i++){

    if(numero%i==0){
        console.log(i);
    }
    
 }