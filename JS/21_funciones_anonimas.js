'use strict'
//Funciones ananimas
//Es una funcion que no tiene nombre

function operacion (numero1, numero2, suma, multiplicacion, resta){
 
    var sumar = numero1+numero2;
    var multiplicar = numero1*numero2;
    var restar = numero1-numero2;


    multiplicacion(multiplicar);
    resta(restar);
    suma(sumar);


    return sumar, restar, multiplicar;
}

operacion(5,5, function(operacion_suma){

    console.log(operacion_suma)

}, function(operacion_resta){

    console.log(operacion_resta)

}, function(operacion_multiplicacion){

    console.log(operacion_multiplicacion)

});



