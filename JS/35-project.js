
'use strict'
window.addEventListener('load', function(){


var formulario = document.querySelector("#formulario");

formulario.addEventListener('submit', function(){


   var addpeliculas = document.querySelector("#addpeliculas").value;

   if(addpeliculas.length >= 1){

     localStorage.setItem(addpeliculas, addpeliculas);
   }

var borrar_directo = document.querySelector("#borrardirecto");


borrar_directo.addEventListener("click", function(){

    localStorage.removeItem(addpeliculas, addpeliculas);
})







});

var ul  = document.querySelector("#peliculas-lista");

for( var index in localStorage){

    if(typeof localStorage[index] == 'string'){
    
        var li = document.createElement("li");
        li.append(localStorage[index]);
        ul.append(li);
    }
}



var formulariob = document.querySelector("#formulariob");

formulariob.addEventListener('submit', function(){

var formularioborrar = document.querySelector("#formulariob_borrar").value;

if(formularioborrar.length >= 1){

localStorage.removeItem(formularioborrar, formularioborrar);

}


});


});