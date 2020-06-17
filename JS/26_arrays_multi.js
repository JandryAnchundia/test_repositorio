'use strict'

var categorias = ["accion", "terror", "comedia"];
var peliculas = new Array("La vida", "Los osos", "The paper town");

var cine = [categorias, peliculas];

//console.log(cine[0][2]);
//console.log(cine[1][1]);

/*
var elemento ="";

do{
    elemento = prompt("Introduce elementos", 0);

    peliculas.push(elemento);


}while(elemento != "ACABAR");

*/


var indice = peliculas.indexOf("La vida");



if (indice>-1){

    peliculas.splice(indice, 1);
    

}

var peliculas_string = peliculas.join();

var cadena= "textoa, textoc, textob";

var cadena_string = cadena.split(", ");

cadena_string.reverse();

console.log(cadena_string);

