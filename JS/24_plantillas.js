'use strict'

//PLantillas de texto

var nombre = prompt("Mete un nombre: ");
var apellido = prompt("Mete tus apellidos");

//var datos = "Su nombre es: "+ nombre +"</br>"+ "Su apellido es: "+ apellido;

var datos = `
<h1 style="size:'50px'">Este es su nombre ${nombre} </h1>

<h2>Este es su apellido ${apellido}</h2>

`;
document.write(datos);


