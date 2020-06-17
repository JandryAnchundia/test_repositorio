//Condicionales 

var edad = 70;
var nombre = "Jandry Anchundia";

if(edad>=18){
    console.log(nombre+" usted es mayor, tiene: "+ edad);

    if(edad<=35){
    console.log (nombre+"usted es un millenials, tiene: "+edad);
    }else if (edad>=70){
        console.log (nombre+"Ya eres un anciano, usted tien: "+edad);
    }if (edad>=36){
        console.log("Ya no eres millenials"+nombre);
    }
}else{
    console.log(nombre+" usted es menor, tiene: "+ edad);
}

/**
 AND &&
 OR     º
 DIFERENTE !=
 */

 var year = 2018;


if (year >= 2000 && year <= 2020 && year != 2018){

    console.log ("Estamos en la era actual ");

}else{

    console.log("Estamos en la hora post moderna")
}

//Anexar otros operadores