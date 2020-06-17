
'use strict'

window.addEventListener('load',function(){


console.log("Esta cargado");

var formulario = document.querySelector("#formulario");
var box_cuadro = document.querySelector(".cuadro");

box_cuadro.style.display="none";

formulario.addEventListener('submit', function () {

console.log("Me estais, soy submit");

var nombre = document.querySelector("#nombre").value;
var apellidos = document.querySelector("#apellidos").value;
var edad = parseInt(document.querySelector("#edad").value);


if(nombre == null && apellidos == null && edad == null ){

  alert("Rellene todo los campos")

  return false;

}else if (nombre.trim() ==null || nombre.trim ().length ==0){

  alert("Ingrese su nombre");

  var error = document.querySelector("#error");

  error.innerHTML="Ingrese su nombre, por favor";
  error.style.color="red";

  return false;
} else if (apellidos.trim() == null || apellidos.trim().length ==0){

  alert("Ingrese su apellido");

  return false;
}else if (edad == null || edad <= 0 || isNaN(edad)){
  alert("Ingrese edad");

  return false;
}




box_cuadro.style.display = "block";

console.log(nombre, apellidos, edad);

/**
   var parrafo = document.createElement("p");

   parrafo.append(nombre);
   parrafo.append(apellidos);
   parrafo.append(edad);


   box_cuadro.append(parrafo);
  
 */



/**
   var datos_usuarios= [nombre, apellidos, edad];

   for(var indice in datos_usuarios){

    var parrafo = document.createElement("p")

    parrafo.append(datos_usuarios[indice]);

    box_cuadro.append(parrafo);
   }
**/

var p_nombre = document.querySelector("#nombre span");
var p_apellidos = document.querySelector("#apellidos span");
var p_edad = document.querySelector("#edad span");


p_nombre.innerHTML = nombre;
p_apellidos.innerHTML = apellidos;
p_edad.innerHTML = edad;

});

});