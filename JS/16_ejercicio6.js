'use strict'

/**
 * Que nos diga si un numero es par o impar
 * 1:)Ventana que nos pida pront
 */

 var numero = parseInt(prompt ("Intrduce un numero", 0));

 while(isNaN(numero)){

    var numero = parseInt(prompt ("Intrduce un numero", 0));

 }

 if (numero%2==0){

    alert("Es un numeero par"+ numero);
 }else{
     alert("Es un numero impar"+numero);
 }