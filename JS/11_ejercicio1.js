/**
 Programr que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales 
 PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir
 */

var numero1 = parseInt(prompt("Ingrese primero numero: ", 0));
var numero2 = parseInt(prompt("Ingrese segundo numero: ", 0));

while(numero1<= 0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)){

    numero1 = parseInt(prompt("Ingrese primero numero: ", 0));
    numero2 = parseInt(prompt("Ingrese segundo numero: ", 0));
}

if (numero1 >numero2){
    alert("El primer numero es mayor: "+numero1);
}else if (numero2>numero1){

    alert("El segundo numero es mayor: "+numero1);

}else if (numero1==numero2){

    alert("Ambos son iguales: "+numero1+" = "+numero2);
}else{
    alert("Introucir numeros correctos");
}

