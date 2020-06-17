
'use strict'
/**
 * Una funcion es una agrupacion reutilizable de un comjunto de instrucciones.
 * 

 */


 function porconsola(numero1, numero2){

    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("**************************");


 }

 function porpantalla(numero1, numero2){

    document.write("Suma: "+(numero1+numero2)+"</br>");
    document.write("Resta: "+(numero1-numero2)+"</br>");
    document.write("Multiplicacion: "+(numero1*numero2)+"</br>");
    document.write("Division: "+(numero1/numero2)+"</br>");
    document.write("**************************"+"</br>");

 }
function calculadora(numero1, numero2, mostrar=false){

    if(mostrar==false){

        porconsola(numero1, numero2);


    }else{

        porpantalla(numero1, numero2);

    }

    return true;
}

calculadora(2,4, false);

calculadora(8,4, true);


/*
for(var i= 1; i<=10; i++){
console.log("Numero de iteraciones"+ "<h1>"+i+"</h1>");
calculadora(i,8);
console.log("*****************************");
}
*/






