'use strict'

/*
Crear calculadora 
Pida dos numeros spor pantallas 
Si metemos uno mal que nos los vuelva a pedir 
body, alerta  dy consula los resultados 
sumar, restar multiplicar y divir las dos cofras
*/

var numero1= parseInt(prompt("Ingrese su primer numero", 0));
var numero2 = parseInt(prompt("Ingrese un segundo numero", 0));


while(numero1 < 0 || numero2 < 0  || isNaN(numero2) || isNaN(numero1)){
 numero1= parseInt(prompt("Ingrese su primer numero"));
 numero2 = parseInt(prompt("Ingrese un segundo numero"));
} 

var resultado = "La suma es: "+(numero1+numero2)+"<br>"
+ "La resta es: "+(numero1-numero2)+"<br>"
+ "La multiplicacion es: " +(numero1*numero2)+"<br>"
+ "La division es:"+(numero1/numero2);

var resultadocmd = "La suma es: "+(numero1+numero2)+" \n"+ 
"La resta es: "+(numero1-numero2)+" \n"+ 
"La multiplicacion es: " +(numero1*numero2)+" \n"
+ "La division es:"+(numero1/numero2);



document.write(resultado);

alert(resultadocmd);