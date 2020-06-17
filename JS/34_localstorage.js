'use strict'

//LocalStorage


window.addEventListener('load', function(){

    //Comprobar si el localstorage existe

    if(typeof(Storage) != 'undefined'){

        console.log("Local Storoge disponible");

        
      }else{
      
          console.log("No disponible");
      }


      // Guardar datos en el localstorage 

      this.localStorage.setItem("Titulo del curso", "Curso de Symfony");

      //Recuperarelemento

     
    // codigo mas limpio
      document.querySelector("#contenedor_peliculas").innerHTML=localStorage.getItem("Titulo");

    //forma tradicional

    var contenedor = document.querySelector("#contenedor_peliculas");

    var getvalue = this.localStorage.getItem("titulo2");

    contenedor.innerHTML= getvalue;

    //Guardar Objetos en el LocalStorage

    
var datos = {

  nombre: "Jandry Orlando",
  apellidos: "Anchundia Falconez", 
  edad: "21"
};

this.localStorage.setItem("datos", JSON.stringify(datos));

//Recuperar objetos 

var datosrecuperar = JSON.parse(this.localStorage.getItem("datos"));

console.log(datosrecuperar);
   
document.querySelector("#datos").append(datosrecuperar.nombre+" - " + datosrecuperar.apellidos);
      

});

