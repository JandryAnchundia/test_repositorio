'use strict'

/**
 * Utilizndo un bucle, mostrar la suma y la media 
 * de los numeros introducidos hasta introducir un numero
 * negaticvo y ahi mostrar el resultado
 */

 var contador=0;
 var suma=0;

 do{
   var numero= parseInt(prompt("Inserte su numero: ",0));

   if(isNaN(numero)){
       numero=0;
   }else if (numero>=0){

    suma= suma+numero;

    contador++;
   }


 }while(numero>=0)

 alert("Su suma es: "+ suma);
 alert("Su promedio es: "+suma/contador);


 