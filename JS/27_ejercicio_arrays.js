'use strict'

/**
 * 1) Hacer un programa que pida seas numeros en pantalla y los meta en un array
 * 2) Mostrar todos los elementos del array en el cuerpo y la cnsola 
 * 3) Tenemos que sacar el array ordenado 
 * 4) Invertir su orden y mostrarlo 
 * 5) Moatrar cunatos elementos tiene el array
 * 6) Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice 
 * (Sr valorarà el uso de funciones)
 * 
 */

 // Este bucle permite que se repita cada dato almacenado en el Array
var numeros = [];

for (var i=0; i<4; i++){

    numeros.push(parseInt(prompt("Ingresaos numeros")));
    //document.write("<h1>"+numeros[i]+"</h1></br>")
}

document.write("<h1> 1) Esto aparecerà de forma vertical usando For</h1>")

document.write("<h1>"+numeros+"</h1></br>")

//Esto es utilizando  un foreach

document.write("<h1> 2) Esto aparecerà en cuerpo es forEach</h1>");

numeros.forEach((number, index)=>{
    
    document.write("<ul><li><h1>"+index+" - "+number+"</h1></li></ul>");
    
});

//Esto es utilizando  una funcion

document.write("<h1>3) Esto aparecerà usando una Function</h1>");

function arrayNumeros(elementos, texto=" "){

    document.write("<ul>")
    elementos.forEach((arreglo, index)=>{
        
        document.write("<li><h1>"+index+" - "+arreglo+" "+texto+"</li></h1>");
    });
    document.write("</ul>")

}

arrayNumeros(numeros, "Okay");


//Ordenar los arreglos

document.write("<h1>Arreglo ordenados de menor a mayor</h1>");

var ordenados_mayor= numeros.sort();
document.write("<h1>Arreglo:"+" "+ ordenados_mayor+"</h1>");

//Ordenar los arreglos

document.write("<h1>Arreglo ordenados ordenados de mayor a menor</h1>");

var ordenados_menor= numeros.sort(function(a, b){return b-a});
document.write("<h1>Arreglo:"+" "+ ordenados_menor+"</h1>");

//Invertir su orden y mostrarlos

document.write("<h1>Invertir el orden y mostrarlo</h1>");

var inverso = numeros.reverse();
//document.write("<h1>Arreglo:"+" "+inverso+"</h1>");

//Aplicando un metodo para enlistarlo dentro de una funcion 

function inversoArray(array_variable, texto){

    document.write("<ul>")

    array_variable.forEach((array_funcion, indicador="")=>{

        document.write("<li><h1>"+array_funcion+"</li></h1>");
    });
    document.write("</ul>")

}

inversoArray(inverso);

//Contar elementos

document.write("<h1>Cuantos elementos hay en el arreglo</h1>");

var contador = numeros.length;
document.write("<h1>Hay estos elementos guardados:"+" "+ contador+"</h1>");


//Buscar un numero

document.write("<h1>Busqueda de numero</h1>");

var buscar = parseInt(prompt("Introduzca el valo a buscar: "));

var ubicacion = numeros.findIndex(numero => numero == buscar);

if (ubicacion != -1){

    document.write("<h1>"+"ENCONTRADO</h1>");

    document.write("<h1>"+"Busqueda de numero "+ubicacion+"</h1>");
}else{

    document.write("<h1>"+"NO ENCONTRADO"+"</h1>");
}
































