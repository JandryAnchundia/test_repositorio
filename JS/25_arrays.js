'use strict'

//Arrays , arreglos, matrices

var nombre = "Jandry";

var nombres = ["Jandry", "Juan", "Leandro"];

var lenguajes= new Array("Php", "Kotlin","Java");


/*
var elemento = parseInt(prompt("Intruduzca un numero: ", 0));

if (elemento >= nombres.length){

    alert("No existe, introduce numero menor que: "+nombres.length);


}else{

alert("El usuario seleccionado es: "+nombres[elemento]);

}
*/

document.write("<h1>Lenguajes de programacion del 2020</h1>");
document.write("<ul>");
/*
for(var i=0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");
*/

/*
lenguajes.forEach((elementos, indice)=>{

    document.write("<li>"+indice+" - "+elementos+"</li>");
});



nombres.forEach((elemento_nombre, indix)=>{
   
 document.write("<li>"+indix + " - "+elemento_nombre+"</h1>");

});

document.write("<ul>");
*/


/*
var lenguaje = parseInt(prompt("Hagale a un numero: "));
   
if (lenguaje<3){

    for (let lenguaje in lenguajes){

        document.write("<li>"+lenguajes[lenguaje]+"</li>");

    }


}else{
    document.write("<li>"+"Error"+"</li>");
    }
*/


var busqueda = parseInt(prompt("Insert numero: "));

busqueda = lenguajes.find(lenguaje => lenguaje == "Php");


document.write("<h1>"+busqueda+"<h1>");




   

   
