'use strict'

var numero1 = parseInt(prompt("Introduza un numero",0));
var numero2 = parseInt(prompt("Introduzca otro numero,0"));

while(numero1<numero2){

    numero1++;

    if(numero1%2 != 0){

        document.write("Es impar"+numero1+"<br/>" );
    }
}

while(numero1>numero2){
numero1--;

if(numero1%2 != 0){

    document.write("Es impar: "+numero1+"<br/>" );


}
}

