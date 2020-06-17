'use strict'

window.addEventListener('load', function(){

var peliculas = {
    titulo: "Ya llegue ayer", 
    year: "2020",
    premios: "Grammy Gold"
};


var contenedor_series = document.querySelector("#contenedor_peliculas")

var series = [ {titulo: "My history with you", year: "2019", premios:"Novel"} ];

for (var index in series){

    var parrafo = document.createElement("p");
    parrafo.append(series[index].titulo+ " - "+series[index].year);
    contenedor_series.append(parrafo);
}

});