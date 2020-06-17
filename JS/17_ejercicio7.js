'use strict'

//Tabla de multoplicar de un numero introducido por pantalla

var numero= parseInt(prompt("¿Que tabla deseas?"));



document.write("<h1> Tabla del: "+ numero+ "</h1>")
for(var i=1; i<=10; i++){

    document.write(numero+"x"+i+"="+(i*numero)+"<br>");

}

//Todas las tablas 

for(var c=1; c<=10; c++){
document.write("<h1> Tabla del: "+c+ "</h1>")
for(var i=1; i<=15; i++){

    document.write(c+"x"+i+"="+(i*c)+"<br>");
}
}
