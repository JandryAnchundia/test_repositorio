'use strict'

//DOM Document Model Object

function tamañoLetra(tamaño="", cambioletra){

    seleccionador.style.fontSize=tamaño;
    seleccionador.innerHTML= cambioletra;

}

//Seleccionar a uno elementos

//var seleccionador = document.getElementById("micaja");

var seleccionador = document.querySelector("#micaja")

seleccionador.style.background= "green";
seleccionador.style.color="white";
seleccionador.style.padding="20px";
seleccionador.style.textAlign="center";
seleccionador.innerHTML= "Texto en la caja"
seleccionador.className="Clase añadida";

tamañoLetra("20px", "Hola que tal");

console.log(seleccionador);

//Conseguir elemento por su etiqueta id

var todosElementosDivs = document.getElementsByTagName('div');

var seleccion = document.querySelector("#selector");
var valor;

for(valor in todosElementosDivs){

    if (typeof todosElementosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosElementosDivs[valor].textContent);
        parrafo.append(texto);

        seleccionador.append(parrafo)

    }
}

// Conseguir elemento por su etiqueta class

var verArregloTotal = document.getElementsByTagName('div');

console.log(verArregloTotal);

var classRojo = document.getElementsByClassName('rojo');

//classRojo[0].style.background="red";
//classRojo[1].style.background="red";

for(var iterador in classRojo){
     
    if(classRojo[iterador].className == "rojo"){
        classRojo[iterador].style.background="orange";
    }
     

}




