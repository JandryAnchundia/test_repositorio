'use strict'


window.addEventListener('load', function(){



    function IntervaloStart(){

    var tiempo = setInterval(function(){
      console.log("setInterval ejecutado: ");

      var encabezado = document.querySelector("#timers");
    
      if(encabezado.style.fontSize == "20px"){
encabezado.style.fontSize = "50px";

}
else {

  encabezado.style.fontSize = "20px";

}
}, 2000);


return tiempo;
}

var tiempo = IntervaloStart();


var stop = document.querySelector("#stop");

stop.addEventListener('click', function () {

  alert("Me estan seleccionando");
  clearInterval(tiempo);

});


var start = document.querySelector("#start");

start.addEventListener('click', function () {

alert("Me habeis pausando, tio");

IntervaloStart();

});





});